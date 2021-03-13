import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Select } from 'antd'
import styles from '../../index.less'
import { rgb2arr } from '@antv/l7';

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { townsRevenue } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => townsRevenue({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        data.map(d => {
          d.revenue = parseFloat(d.revenue)
        })
        tableData(data)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(data) {

    const chart = new Chart({
      container: 'LeftTable1v',
      autoFit: true,
      padding: [80, 20, 30, 50],
    });

    chart.data(data);
    chart.scale('revenue', {
      nice: true,
    });

    chart.axis('revenue', {
      grid: {
        line: {
          type: 'line',
          style: {
            stroke: 'rgba(255, 255, 255, 0.15)'
          }
        },
      }
    });

    chart.axis('towns', {
      title: null,
      tickLine: null
    });

    chart.legend({
      position: 'right',
    });
    chart.tooltip({
      showMarkers: false
    });
    chart.interaction('active-region');

    chart
      .interval()
      .position('towns*revenue')
      .shape('text-interval')
      .color('l(90) 0:#00A6F8 1:#00E7EA') // 定义柱状图渐变色
      .size(16)
      .tooltip('towns*revenue', (name, val) => {
        return {
          name: '亩均税收',
          value: val,
        };
      });

    chart.render();
    console.log('**9**')
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>区域亩均销售</span>
          <span>单位：万元</span>
        </div>
        {/* <div className={styles.selectTable}>
          <Select defaultValue="Jack" size="small" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack" className={styles.selectOptionSty}>Jack</Option>
          </Select>
        </div> */}
      </div>
      <div
        id="LeftTable1v"
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
