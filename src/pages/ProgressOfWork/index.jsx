import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import '@/utils/flexible';
import HeadCon from './components/ViewTable3/headcon'
import LeftTables1 from './components/ViewTable3/LeftTables1'
import LeftTables2 from './components/ViewTable3/LeftTables2'
import LeftTables3 from './components/ViewTable3/LeftTables3'

import RightTables1 from './components/ViewTable3/RightTables1'
import RightTables2 from './components/ViewTable3/RightTables2'
import CenterMap from './components/ViewTable3/centerMap'

import styles from './index.less'

export default () => {


  return (
    <>
      <div className={styles.bg}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>岱山 | 工程进度大数据分析</span>
        </div>
        <div className={styles.contentTable}>
          <div className={styles.processHeadcon}>
            <HeadCon />
          </div>
        </div>
        <div className={styles.staTables}>
            <div className={styles.staLeft}>
              <div className={`${styles.staone} ${styles.tableBg}`}>
                <LeftTables1 />
              </div>
              <div className={`${styles.staone} ${styles.tableBg}`}>
                <LeftTables2 />
              </div>
              <div className={`${styles.staone} ${styles.tableBg}`}>
                <LeftTables3 />
              </div>
            </div>
            <div className={`${styles.centerMapSty} ${styles.tableBg}`} >
              <CenterMap />
            </div>
            <div className={styles.staRight}>
              <div className={`${styles.staone1} ${styles.tableBg}`}>
                <RightTables1 />
              </div>
              <div className={`${styles.staone} ${styles.tableBg}`}>
                <RightTables2 />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
