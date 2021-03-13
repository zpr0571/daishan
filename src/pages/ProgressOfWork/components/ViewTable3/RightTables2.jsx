import React, { useEffect, useState } from 'react';
import { Chart, registerShape } from '@antv/g2';
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { projectInvestProportion } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => projectInvestProportion({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        tableData(data[0])
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(fdata) {
    const data = [
      { type: '民间投资', value: fdata.folk },
      { type: '政府投资', value: fdata.government },
    ];

    const chart = new Chart({
      container: 'RightTables2',
      autoFit: true,
      height: 500,
      padding: [30, 10, 0, 100],
    });

    chart.coordinate('theta', {
      radius: 0.6,
    });

    chart.data(data);

    chart.scale('value', {
      formatter: (val) => {
        return val;
      },
    });

    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });

    chart.legend({
      position: 'left',
      offsetX: 10,
    });

    chart
    .interval()
    .position('value')
    .color('type', ['#FF647C', '#FFBE75', '#3EE2A5', '#2CE4E7', '#6D77FD', '#BD7FD9', '#FC8451' ])
    .label('value', {
      style: {
        fill: '#f0f0f0'
      },
      content: (data) => {
        return `${data.value}%`;
      },
    })
    .adjust('stack');

    chart.interaction('element-active');

    chart.render();
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>投资来源占比</span>
        </div>
      </div>
      <div
        id="RightTables2"
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
