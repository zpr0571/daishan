import React, { useEffect, useState } from 'react';
import '@/utils/flexible';

import { Row, Col } from 'antd';
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { projectStatistics } from '../../service'
export default () => {
  const [tableData, setTableData] = useState(null);
  const tableDataApi = useRequest(() => projectStatistics({}), {
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
    <>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={4}>
          <div className={styles.staCon}>
            <span className={styles.staCona}>{tableData?.projectTotal}</span>
            <span className={styles.staConb}>项目总数</span>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.staCon}>
            <span className={styles.staCona}>{tableData?.projectCj}</span>
            <span className={styles.staConb}>筹建项目</span>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.staCon}>
            <span className={styles.staCona}>{tableData?.projectSg}</span>
            <span className={styles.staConb}>施工项目</span>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.staCon}>
            <span className={styles.staCona}>{tableData?.projectSw}</span>
            <span className={styles.staConb}>收尾项目</span>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.staCon}>
            <span className={styles.staCona}>{tableData?.projectTh}</span>
            <span className={styles.staConb}>停缓建项目</span>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={styles.staCon}>
            <span className={styles.staCona}>{tableData?.projectTc}</span>
            <span className={styles.staConb}>投产项目</span>
          </div>
        </Col>
      </Row>
    </>
  );
}
