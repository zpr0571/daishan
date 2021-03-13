import React, { useEffect, useState } from 'react';
import '@/utils/flexible';

import styles from './index.less'

import LeftContext1 from './components/ViewTable2/LeftContext1'
import LeftTable2 from './components/ViewTable2/LeftTable2'
import LeftTable3 from './components/ViewTable2/LeftTable3'
import RightContext1 from './components/ViewTable2/RightContext1'
import RightTable1 from './components/ViewTable2/RightTable1'
import RightTable2 from './components/ViewTable2/RightTable2'

export default () => {

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>企业画像</span>
        </div>
        <div className={styles.contentTable}>
          <div className={styles.oneContent}>
            <div className={`${styles.tableBg} ${styles.left1}`}>
              <LeftContext1 />
            </div>
            <div className={styles.oneBottom}>
              <div className={`${styles.tableBg} ${styles.left2}`}>
                <LeftTable2 />
              </div>
              <div className={`${styles.tableBg} ${styles.left3}`}>
                <LeftTable3 />
              </div>
            </div>
          </div>
          <div className={styles.oneContent}>
            <div className={`${styles.tableBg} ${styles.left1}`}>
              <RightContext1 />
            </div>
            <div className={styles.oneBottom}>
              <div className={`${styles.tableBg} ${styles.left2}`}>
                <RightTable1 />
              </div>
              <div className={`${styles.tableBg} ${styles.left3}`}>
                <RightTable2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
