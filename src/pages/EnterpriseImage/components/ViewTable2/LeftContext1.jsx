import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { message } from 'antd';
import styles from '../../index.less';
import { AMapScene, Marker} from '@antv/l7-react';
import dayjs from 'dayjs'
import { companyInfoList } from '../../service'

export default () => {
  // 获取产品配置信息
  const [companyInfo, setCompanyInfo] = useState(null);

  const companyInfoModel = useRequest(() => companyInfoList({
    id: '1'
  }), {
    // refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        setCompanyInfo(data[0])
      } else {
        message.error('请求出错')
      }
    },
    onError: (error, params) => {
      message.error(error)
    }
  });

  function creatMarkers(lnglat, regNo) {
    const markers = [];
      markers.push(<Marker key={regNo} lnglat={lnglat}/>);
    return markers;
  }

  return (
    <div className={styles.textCon}>
      <div className={`${styles.leftText} ${styles.conText}`}>
        <span className={styles.comTitle}>企业基本信息</span>
        <div className={styles.con1}>
          <div className={styles.conimg}>
            <img src={require('@/assets/daishan/default.png')} />
          </div>
          <div className={styles.comDesc}>
            <span>企业名称：{companyInfo?.comName}</span>
            <span>运营状态：{companyInfo?.status}</span>
            <span>法定代表人：{companyInfo?.legalName}</span>
            <span>公司类型：{companyInfo?.comType}</span>
          </div>
        </div>
        <div className={`${styles.comDesc} ${styles.con2}`}>
          <span>地址：{companyInfo?.comAddress}</span>
          <span>注册号：{companyInfo?.regNo}</span>
          <span>注册资本（万元）：{companyInfo?.regAmt}</span>
          <span>成立时间：{companyInfo?.regTime&&dayjs(companyInfo?.regTime).format('YYYY-MM-DD')}</span>
          <span>登记机关：{companyInfo?.regOrg}</span>
          <span>经营范围：{companyInfo?.bizScope}</span>
        </div>
      </div>
      <div className={styles.rightMap}>
        <div className={styles.con1}>
          {
            console.log(322, [companyInfo?.lat,companyInfo?.lng])
          }
          {
            companyInfo?.id&&<AMapScene
            option={{
              logoVisible: false
            }}
            map={{
              center: [companyInfo?.lng,companyInfo?.lat],
              pitch: 0,
              style: 'dark',
              zoom: 24,
              minZoom: 8
            }}
          >
            {creatMarkers([ companyInfo?.lng,companyInfo?.lat ], companyInfo?.regNo)}
          </AMapScene>

          }
        </div>
      </div>
    </div>
  );
};
