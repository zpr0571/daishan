import React, { useEffect, useState } from 'react';

import { Progress } from 'antd'
import '@/utils/flexible';
import LeftTable1 from './LeftTable1'

import styles from './old-system.less'


export default () => {

  return (
    <>
      <div>
        {/* 一楼 */}
        <div className={styles.borderWhite}>
          <div className={styles.firstLeftPart}>一个饼图
          <LeftTable1 />
          </div>
          <div className={styles.firstCenterLine}></div>
          <div className={styles.firstRightPart}>
            <div className={styles.firstRightTitle}>
              <div>优化营商环境任务</div>
              <div><span>40</span>项</div>
            </div>

            <div className={styles.firstRightContent}>
              <div className={styles.firstRightContentItem}>
                <div>打造市场化营商环境</div>
                <div><Progress percent="35" /></div>
                <div><span>8</span>项</div>
              </div>
              <div className={styles.firstRightContentItem}>
                <div>打造市场化营商环境</div>
                <div><Progress percent="35" /></div>
                <div><span>8</span>项</div>
              </div>
              <div className={styles.firstRightContentItem}>
                <div>打造市场化营商环境</div>
                <div><Progress percent="35" /></div>
                <div><span>8</span>项</div>
              </div>
              <div className={styles.firstRightContentItem}>
                <div>打造市场化营商环境</div>
                <div><Progress percent="35" /></div>
                <div><span>8</span>项</div>
              </div>
              <div className={styles.firstRightContentItem}>
                <div>打造市场化营商环境</div>
                <div><Progress percent="35" /></div>
                <div><span>8</span>项</div>
              </div>
            </div>
          </div>
        </div>
        {/* 二楼 */}
        <div className={styles.secondPart}>
          <div className={styles.secondLeftPart}>

            <div><span>地区生产总值</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>规上工业增加值</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>固定资产投资额</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>外贸货物进出口总额</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>地区生产总值</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>规上工业增加值</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>固定资产投资额</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
          </div>
          <div className={styles.secondCenter}>
            数字为舟、奋楫笃行，岱山县营商服务综合体践行“三全、三极、三最”“整体改革思路，即：全周期、全链条、全覆盖、“极速审批、极准监管、极优服务”、“办事效率最高、投资环境最好、企业获得感最强”，全力打造重大战略产业地、自贸海事服务地、海洋经济发展地的市场化、法治化、国际化一流营商环境。
          </div>
          <div className={styles.secondRightPart}>
            <div><span>实际到位市外资</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>社会消费品零售总额</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>固定资产投资额</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>外贸货物进出口总额</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>地区生产总值</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>
            <div><span>渔农村常住居民人均可支配收入</span><span>(亿元)</span> <span className={styles.secondRightMoney}>384.8</span></div>

          </div>
        </div>
        {/* 三楼 */}
        <div className={styles.thirdPart}>
          <div className={styles.thirdLeftPart}>
            <div className={styles.thirdLeftTitle}>
              <div>
                自贸区特色经济指标
              </div>

              <div>指标体系<span> &gt; </span></div>
            </div>
            <div className={styles.thirdLeftContent}>
              <div>
                <div>特色经济企业数</div>
                <div>10家</div>
              </div>
              <div>
                <div>特色经济企业数</div>
                <div>10家</div>
              </div>
            </div>
          </div>
          <div className={styles.thirdRigthPart}>
            营商环境评价指标
</div>
        </div>

      </div>
    </>
  );
}
