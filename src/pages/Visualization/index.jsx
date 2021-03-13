import React, { useEffect, useState } from 'react';
import '@/utils/flexible';

import CenterMap from './components/ViewTable1/Center1'
import CenterBottom from './components/ViewTable1/CenterBottom'

import LeftTable1 from './components/ViewTable1/LeftTable1'
import LeftTable2 from './components/ViewTable1/LeftTable2'
import LeftTable3 from './components/ViewTable1/LeftTable3'

import RightTable1 from './components/ViewTable1/RightTable1'
import RightTable2 from './components/ViewTable1/RightTable2'
import RightTable3 from './components/ViewTable1/RightTable3'


import styles from './index.less'

export default () => {

  useEffect(() => {
      console.log('***998***')
  });
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>岱山县经济驾驶舱</span>
        </div>
        <div className={styles.contentTable}>
          <div className={styles.leftTable}>
            <div className={styles.tableOne}>
              <LeftTable1 />
            </div>
            <div className={styles.tableOne}>
              <LeftTable2 />
            </div>
            <div className={styles.tableOne}>
              <LeftTable3 />
            </div>
          </div>


          <div className={styles.centerTable}>
            <div className={styles.tableTwo}>
              <CenterMap />
            </div>
            <div className={styles.centerBottom}>
              <CenterBottom />
            </div>
          </div>


          <div className={styles.rightTable}>
            <div className={styles.tableOne}>
              <RightTable1 />
            </div>
            <div className={styles.tableOne}>
              <RightTable2 />
            </div>
            <div className={styles.tableOne}>
              <RightTable3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
