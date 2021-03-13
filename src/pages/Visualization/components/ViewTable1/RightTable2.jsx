import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { townsCovers } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => townsCovers({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        tableData(data)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData() {
    const data = [
      { towns: '绿色石化', companyCount: 12  },
      { towns: '船舶业', companyCount: 386  },
      { towns: '汽配业', companyCount: 181 },
      { towns: '零售业', companyCount: 281 },
      { towns: '批发业', companyCount: 234 },
    ];
    const chart = new Chart({
      container: 'RightTable2v',
      autoFit: true,
      height: 500,
      padding: [50, 20, 15, 70],
    });

    chart.data(data);
    chart.scale('companyCount', {
      formatter: (val) => {
        val = val;
        return val;
      },
    });

    chart.coordinate('theta', {
      radius: 0.75,
      innerRadius: 0.6,
    });

    chart.legend({
      position: 'left',
      offsetX: 20,
      offsetY: 20,
    });

    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
    });
    chart
    .interval()
    .adjust('stack')
    .position('companyCount')
    .color('towns', ['#FF647C', '#FFBE75', '#3EE2A5', '#2CE4E7', '#6D77FD'])
    .label('companyCount', (companyCount) => {
      return {
        content: (data) => {
          return `${data.towns}: ${companyCount}`;
        },
        style: {
          fontSize: 12,
          fontFamily: 'PingFangSC-Regular, PingFang SC',
          fontWeight: 400,
          fill: "rgba(255, 255, 255, 0.65)",
          lineHeight: 12,
        }
      };
    })
    .tooltip('towns*companyCount', (towns, companyCount) => {
      return {
        name: towns,
        value: companyCount,
      };
    });

    chart.interaction('element-active');

    chart.render();
  }


  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>区域分析</span>
          <span>单位：家</span>
        </div>
      </div>
      <div
        id="RightTable2v"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 10,
          bottom: 0,
        }}
      />
    </>
  )

}
