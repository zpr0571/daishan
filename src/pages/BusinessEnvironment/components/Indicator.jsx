import React, { useEffect, useState } from 'react';

import { Progress } from 'antd'
import '@/utils/flexible';

import styles from './system.less'
import Chart1 from './Chart1'
export default () => {

  return (
    <>
      <div className={styles.indicatorContainter}>
        <div className={styles.leftPart}>
          <div className={styles.leftFirstPart}>
            <div className={styles.borderBlue}>
              <div className={styles.task}>
                <div className={styles.taskTitle}>
                    <div>优化营商环境任务</div>
                    <div>999项</div>
                </div>
                <div className={styles.taskItem}>
                  <div className={styles.taskItemFirst}>
                    <div>打造市场化营商环境</div>
                    <div><span>8</span>  项</div>
                  </div>
                  <div><Progress percent="25" /></div>
                </div>
                <div className={styles.taskItem}>
                  <div className={styles.taskItemFirst}>
                    <div>打造市场化营商环境</div>
                    <div><span>12</span>  项</div>
                  </div>
                  <div><Progress percent="35" /></div>
                </div>
                <div className={styles.taskItem}>
                  <div className={styles.taskItemFirst}>
                    <div>打造市场化营商环境</div>
                    <div><span>23</span>  项</div>
                  </div>
                  <div><Progress percent="45" /></div>
                </div>
              </div>
            </div>
            <div className={styles.borderBlue}>
              <div className={styles.environMap}>

              <Chart1/>

              </div>
            </div>
          </div>
          <div className={styles.leftSecondPart}>
            <div className={styles.borderBlue}>
              <div className={styles.leftSecondOne}>
              数字为舟、奋楫笃行，岱山县营商服务综 合体践行“三全、三极、三最”“整体改革 思路，即：全周期、全链条、全覆盖、“极速 审批、极准监管、极优服务”、“办事效率最 高、投资环境最好、企业获得感最强”，全 力打造重大战略产业地、自贸海事服务地、 海洋经济发展地的市场化、法治化、国际化 一流营商环境。
              </div>
            </div>

            <div className={styles.borderBlue}>
              <div className={styles.leftSecondTwo}>
                <div className={styles.economicsTitle}>
                  <div>自贸区特色经济指标</div>
                  <div>指标体系  &gt;</div>
                </div>
                <div className={styles.economicItem}>
                    <div>特色经济企业数</div>
                    <div><span>12</span>  家</div>
                </div>
                <div className={styles.economicItem}>
                    <div>特色经济企业数</div>
                    <div><span>12</span>  家</div>
                </div>
                <div className={styles.economicItem}>
                    <div>特色经济企业数</div>
                    <div><span>12</span>  家</div>
                </div>
              </div>
            </div>

            <div className={styles.borderBlue}>
              <div className={styles.leftSecondThree}>
                <div className={styles.economicsTitle}>
                  <div>营商环境评价指标</div>
                  <div>指标体系  &gt;</div>
                </div>
                <div className={styles.economicItem}>
                    <div>纳税</div>
                    <div><span>95</span>  分</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.rightPart}>
          <div className={styles.borderBlue}>
            <div className={styles.indicatorRight}>
              <div className={styles.incomeItem}>
                <div>地区生产总值</div>
                <div>888.89亿元</div>
              </div>
              <div className={styles.incomeItem}>
                <div>规上工业增加值</div>
                <div>888.89亿元</div>
              </div>
              <div className={styles.incomeItem}>
                <div>固定资产投资额</div>
                <div>888.89亿元</div>
              </div>
              <div className={styles.incomeItem}>
                <div>水产品总产量</div>
                <div>888.89亿元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
