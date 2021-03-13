import React, { useEffect, useState } from 'react';
import '@/utils/flexible';

import styles from './system.less'


export default () => {

  return (
    <>
       <div className={styles.workContainter}>
        <div className={styles.firstPart}>
          <div className={styles.borderBlue}>
            <div className={styles.firstLeft}>
              <div className={styles.firstTitle}>
                <div>工作专班</div>
                <div>专版文件  &gt;</div>
              </div>
            </div>
          </div>
          <div className={styles.borderBlue}>
            <div className={styles.firstLeft}>
              <div className={styles.firstTitle}>
                <div>工作计划</div>
                <div>指标体系  &gt;</div>
              </div>
            </div>
          </div>
          <div className={styles.borderBlue}>
            <div className={styles.firstLeft}>
              <div className={styles.firstTitle}>
                <div>任务督办</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
