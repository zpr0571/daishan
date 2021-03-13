import React, { useEffect, useState } from 'react';
import '@/utils/flexible';

import styles from './system.less'


export default () => {

  return (
    <>
      <div className={styles.evaluateContainter}>
        <div className={styles.firstPart}>
          <div className={styles.borderBlue}>
            <div className={styles.firstLeft}>
              <div className={styles.firstTitle}>
                <div>2020年主要评价情况</div>
                <div>查看更多  &gt;</div>
              </div>
              <div className={styles.firstContent}>
                <table>
                  <thead>
                    <tr>
                      <td>评价指标</td>
                      <td>手续(个）</td>
                      <td>材料（件）</td>
                      <td>时间</td>
                      <td>便捷度（跑动次数）</td>
                      <td>成本占比(%)</td>
                      <td>便利化得分</td>
                    </tr>
                  </thead>
                  <tbody>


                    <tr>
                      <td>开办企业</td>
                      <td>10</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>财产登记</td>
                      <td>10</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>获得电力</td>
                      <td>10</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>纳税</td>
                      <td>10</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.borderBlue}>
            <div className={styles.firstRightPart}>
              <div className={styles.firstRightTitle}>投诉电话</div>
              <div className={styles.phoneItem}>
              
                <div><img src={require('../../../assets/daishan/phone.png')}  alt="" /></div>
                <div>0571-66668888</div>
              </div>
              <div className={styles.phoneItem}>
              
                <div><img src={require('../../../assets/daishan/phone.png')}  alt="" /></div>
                <div>0571-66668888</div>
              </div>
              <div className={styles.firstRightTitle}>网上投诉</div>
              <div className={styles.firstRightBtn}>投诉入口</div>
            </div>
          </div>
        </div>
        <div className={styles.secondPart}>

          <div className={styles.borderBlue}>
            <div className={styles.secondLeftPart}>
              <div className={styles.secondTitle}>2019年度评价得分</div>
              <div className={styles.secondLeftRank}>
                <img src={require('../../../assets/daishan/rankA.png')}  alt="" />
              </div>
              <div className={styles.secondLeftWord}>综合评价得分处于全省上游</div>
            </div>
          </div>
          <div className={styles.borderBlue}>
            <div className={styles.secondCenterPart}>
              <div className={styles.secondTitle}>2019年度最美营商服务</div>
              <div className={styles.secondListTitle}>
                <div>窗口</div>
                <div>最美服务人</div>
              </div>          
              <div className={styles.secondListItem}>
                <div>发改委窗口</div>
                <div>王文生</div>
              </div>
            </div>
          </div>

          <div className={styles.borderBlue}>
              <div className={styles.secondRightPart}>
                <div className={styles.secondTitle}>创新亮点</div>
                <div className={styles.phoneItem}>
                  <div><img src={require('../../../assets/daishan/rankOne.png')}  alt="" /></div>
                  <div>绘制“四张表”促进市场主体量质双提升</div>
                </div>
                <div className={styles.phoneItem}>
                  <div><img src={require('../../../assets/daishan/rankOne.png')}  alt="" /></div>
                  <div>破产审判推陈出新 保驾护航经济发展</div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}
