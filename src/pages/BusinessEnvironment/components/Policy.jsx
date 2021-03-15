import React, { useEffect, useState } from 'react';
import '@/utils/flexible';

import styles from './system.less'

export default () => {

  return (
    <>
      <div className={styles.borderBlue}>
        <div className={styles.policyContainter}>
          <div className={styles.policyTitle}>
            <div>政策通知</div>
            <div>查看更多  &gt;</div>
          </div>
          <div className={styles.policyContent}>
            <div className={styles.policyItem}>
              <div className={styles.policyItemLeft}>
                <div>岱山县交通运输局岱山县经济和信息化局关于印发《岱山县工业重点骨干企业货运车辆优先过渡预约实施办法（试行）》的通知</div>
                <div>
                  县交通运输局
                </div>
              </div>
              <div className={styles.policyItemRight}>
                15200000000
             </div>
            </div>
            <div className={styles.policyItem}>
              <div className={styles.policyItemLeft}>
                <div>岱山县交通运输局岱山县经济和信息化局关于印发《岱山县工业重点骨干企业货运车辆优先过渡预约实施办法（试行）》的通知</div>
                <div>
                  县交通运输局
                </div>
              </div>
              <div className={styles.policyItemRight}>
                15200000000
             </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
