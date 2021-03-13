import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Select } from 'antd'
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { projectProgress } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => projectProgress({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        data.map(d => {
          d.progress = parseFloat(d.progress)
        })
        tableData(data)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(data) {
    const chart = new Chart({
      container: 'RightTables1',
      autoFit: true,
      height: 500,
      padding: [60, 30, 60, 50],
    });

    chart.data(data);
    chart.scale({
      progress: {
        max: 1400,
        min: 0,
        alias: '销量（百万）',
      },
    });
    chart.axis('name', {
      title: null,
      tickLine: null,
      line: null,
    });

    // chart.axis('progress', false)

    chart.axis('progress', {
      label: null,
      title: {
        offset: 30,
        style: {
          fontSize: 12,
          fontWeight: 300,
          fill: '#fff'
        },
      },
      grid: {
        line: {
          type: 'line',
          style: {
            stroke: 'rgba(255, 255, 255, 0.15)'
          }
        },
      }
    });
    chart.legend(false);
    chart.coordinate().transpose();
    chart
      .interval()
      .position('name*progress')
      .size(18)
      .color('l(0) 0:#00A2F7 1:#2DE4E7') // 定义柱状图渐变色
      .label('progress', {
        style: {
          fill: '#8d8d8d',
        },
        offset: 10,
      });
    chart.interaction('element-active');
    chart.render();
  }


  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>项目进度详情</span>
          <span></span>
        </div>
      </div>
      <div
        id="RightTables1"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </>
  )

}
