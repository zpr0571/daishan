import { MapboxScene, Marker, PolygonLayer, LayerEvent, Popup  } from '@antv/l7-react'
import React, { useEffect, useState } from 'react';

import styles from '../../index.less';

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { projectBigData } from '../../service'

import daishanJson from '@/assets/daishan/daishan' // 岱山县地图数据
import companyData from './company'

const MarkerInfo = ({ count, colorBg }) => {
  return (
    <div className={styles.markerMapCon}>
      <div className={styles.markerMapConIcon}>
        <div className={styles.markerMapConIcona} style={{backgroundColor: colorBg}} >{count}</div>
      </div>
    </div>
  );
};

export default () => {
  const [ data, setData ] = useState(daishanJson);
  const [ company, setCompany ] = useState(null);

  const tableDataApi = useRequest(() => projectBigData({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        setCompany(data)
      } else {
        message.error('请求出错')
      }
    },
  });


  function showPopup(args) {
    console.log(422, args)
  }

  return (
    <>
      <MapboxScene
        map={{
          pitch: 0,
          style: "blank",
          center: [122.233319,30.321115],
          zoom: 4,
          minZoom: 9.7,
          maxZoom: 9.7,
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
                <MarkerInfo count={item.count} colorBg={item.color} />
              </Marker>
            );
          })}
      </MapboxScene>
      <div className={styles.mapConTral}>
        <div className={styles.contralFlex}>
          <div className={styles.mapConOne}>
            <div className={`${styles.contBtn} ${styles.contBtnColor1}`} ></div>
            <span>投产项目</span>
          </div>

          <div className={styles.mapConOne}>
            <div className={`${styles.contBtn} ${styles.contBtnColor2}`} ></div>
            <span>建设中项目</span>
          </div>

          <div className={styles.mapConOne}>
            <div className={`${styles.contBtn} ${styles.contBtnColor3}`} ></div>
            <span>停缓建项目</span>
          </div>
        </div>
      </div>
    </>
  );
}
