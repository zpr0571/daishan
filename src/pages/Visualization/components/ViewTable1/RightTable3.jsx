import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { townsCoversPollution } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => townsCoversPollution({}), {
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

  function tableData(data) {
    const chart = new Chart({
      container: 'RightTable3v',
      autoFit: true,
      padding: [50, 20, 30, 50],
    });

    chart.data(data);
    chart.scale('companyCount', {
      nice: true,
    });

    chart.axis('towns', {
      title: null,
      tickLine: null
    });

    chart.legend({
      position: 'right',
    });

    chart.axis('companyCount', {
      grid: {
        line: {
          type: 'line',
          style: {
            stroke: 'rgba(255, 255, 255, 0.15)'
          }
        },
      }
    });

    chart.tooltip({
      showMarkers: false
    });
    chart.interaction('active-region');

    chart
      .interval()
      .position('towns*companyCount')
      .shape('text-interval')
      .color('l(90) 0:#00A6F8 1:#00E7EA') // 定义柱状图渐变色
      .size(16)
      .tooltip('towns*companyCount', (name, val) => {
        return {
          name: '企业数量',
          value: val,
        };
      });

    chart.render();
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>排污企业分布</span>
          <span>单位：家</span>
        </div>
      </div>
      <div
        id="RightTable3v"
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
