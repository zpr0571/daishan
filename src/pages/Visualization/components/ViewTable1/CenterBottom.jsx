import React, { useEffect, useState } from 'react';
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { companyBigData } from '../../service'
export default () => {
  const [tableData, setTableData] = useState(null);
  const tableDataApi = useRequest(() => companyBigData({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        setTableData(data[0])
      } else {
        message.error('请求出错')
      }
    },
  });

  return (
    <div className={styles.descContent}>
      <div className={styles.descCol}>
        <div className={styles.descOne}>
          <label>企业总数</label>
          <span>{tableData?.companyTotal}家</span>
        </div>
        <div className={styles.descOne}>
          <label>销售总额</label>
          <span>{tableData?.profitTotal}万元</span>
        </div>
        <div className={styles.descOne}>
          <label>排污总量</label>
          <span>{tableData?.pollutionTotal}当量</span>
        </div>
      </div>
      <div className={styles.descCol}>
        <div className={styles.descOne}>
          <label>规上企业数</label>
          <span>{tableData?.companyTotalGs}家</span>
        </div>
        <div className={styles.descOne}>
          <label>税收总额</label>
          <span>{tableData?.revenueTotal}万元</span>
        </div>
        <div className={styles.descOne}>
          <label>废气排放</label>
          <span>{tableData?.exhaustTotal}当量</span>
        </div>
      </div>
      <div className={styles.descCol}>
        <div className={styles.descOne}>
          <label>占地面积</label>
          <span>{tableData?.area}亩</span>
        </div>
        <div className={styles.descOne}>
          <label>亩均税收</label>
          <span>{tableData?.revenueMu}万元</span>
        </div>
        <div className={styles.descOne}>
          <label>废水排放</label>
          <span>{tableData?.effluentTotal}当量</span>
        </div>
      </div>
      <div className={styles.descCol}>
        <div className={styles.descOne}>
          <label>规上用地比例</label>
          <span>{tableData?.proportionGs}%</span>
        </div>
        <div className={styles.descOne}>
          <label>亩均销售</label>
          <span>{tableData?.profitMu}万元</span>
        </div>
        <div className={styles.descOne}>
          <label>总能耗</label>
          <span>{tableData?.energyTotal}标准煤</span>
        </div>
      </div>
    </div>
  )
}
