import { MapboxScene, Marker, PolygonLayer, LayerEvent, Popup  } from '@antv/l7-react'
import React, { useEffect, useState } from 'react';

import styles from '../../index.less';

import daishanJson from '@/assets/daishan/daishan' // 岱山县地图数据
// import companyData from './company'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { companyInfoList } from '../../service'

const MarkerInfo = ({ title, colorBg }) => {
  return (
    <div className={styles.markerMapCon}>
      <div className={styles.markerMapConIcon}>
        <div className={styles.markerMapConIcona} style={{backgroundColor: colorBg}} ></div>
      </div>
      <div className={styles.markerMapConLabel}>
        <div className={styles.markerMapConLabela}>{title}</div>
      </div>
    </div>
  );
};

export default () => {
  const [ data, setData ] = useState(daishanJson);
  const [ company, setCompany ] = useState(null);
  const [ popupInfo, setPopupInfo] = useState(null)

  // 获取产品配置信息
  const companyInfoModel = useRequest(() => companyInfoList({
    id: '1'
  }), {
    // refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        setCompany(data)
      } else {
        message.error('请求出错')
      }
    },
    onError: (error, params) => {
      message.error('请求错误')
    }
  });

  function showPopup(args) {
    let popInfo = company.find(c => parseFloat(c.lng)?.toFixed(2) === args?.lngLat?.lng?.toFixed(2));
    console.log(520, popInfo, args)
    if(!popInfo || popInfo?.id === popupInfo?.id){
      return
    }
    setPopupInfo(
      {
        lnglat: args.lngLat,
        comp: popInfo
      }
    );
    console.log(33, popInfo, popupInfo)
  }

  return (
    <>
      <MapboxScene
        map={{
          pitch: 0,
          style: "blank",
          center: [122.233319,30.391115],
          zoom: 4,
          minZoom: 9,
          maxZoom: 9,
        }}
        option={{
          logoVisible: false,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {popupInfo && (
          <Popup lnglat={popupInfo.lnglat} option={{
            // closeOnClick: false,
            closeButton: false,
            className: styles.popupCont
          }}>
            <div className={styles.popCon}>
              <span>{popupInfo?.comp?.comName}</span>
              <div className={styles.popa}>
                <div className={styles.popa1}></div>
                <span>营业额：{popupInfo?.comp?.regAmt}万元</span>
              </div>
            </div>
          </Popup>
        )}
        {data&&(
          <PolygonLayer
            key={'2'}
            autoFit
            source={{
              data,
            }}
            color={{
              field: 'name',
              values: ['#00B2CC', '#69D1AB', '#DAF291', '#FFD591', '#FF7A45', '#CF1D49'],
            }}
            shape={{
              values: 'fill',
            }}
            style={{
              opacity: 1,
            }}
          >
            <LayerEvent type="mousemove" handler={showPopup} />
          </PolygonLayer>
        )}
        {company &&
          company.map((item) => {
            return (
              <Marker key={item.id} lnglat={[item.lng, item.lat]} >
                <MarkerInfo title={item.comName} colorBg={'#F3FA52'} />
              </Marker>
            );
          })}
      </MapboxScene>
      <div className={styles.mapConTral}>
        <div className={styles.mapConOne}>
          <div className={styles.contBtn}></div>
          <span>企业</span>
        </div>
      </div>
    </>
  );
}
