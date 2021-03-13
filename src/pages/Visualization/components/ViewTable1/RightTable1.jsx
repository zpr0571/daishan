import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Select } from 'antd'
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { areaCovers } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => areaCovers({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;

      let fdata = [];
      if (recode === '000000') {
        for(let obj of data) {
          fdata.push({
            type: 'gycr',
            towns: obj.towns,
            name: '国有出让',
            val: obj.gycr
          },{
            type: 'ncjt',
            towns: obj.towns,
            name: '农村集体',
            val: obj.ncjt
          },{
            type: 'other',
            name: '其他用地',
            towns: obj.towns,
            val: obj.other
          })
        }
        tableData(fdata)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(data) {

    const chart = new Chart({
      container: 'RightTable1v',
      autoFit: true,
      height: 500,
      padding: [80, 20, 30, 50],
    });

    chart.data(data);
    chart.scale('val', {
      nice: true,
    });
    chart.tooltip({
      shared: true,
      showMarkers: false,
    });

    chart.legend(false)
    chart.axis('val', {
      grid: {
        line: {
          type: 'line',
          style: {
            stroke: 'rgba(255, 255, 255, 0.15)'
          }
        },
      }
    });

    chart
      .interval()
      .position('towns*val')
      .color('type', ['#FF647C', '#FFBE75', '#3EE2A5', '#2CE4E7', '#6D77FD', '#BD7FD9', '#FC8451' ])
      .adjust('stack')
      .tooltip('name*val', (name, val) => {
        return {
          name: name,
          value: val,
        };
      });

    chart.interaction('active-region');

    chart.render();
  }


  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>占地分析</span>
          <span>单位：亩</span>
        </div>
        {/* <div className={styles.selectTable}>
          <Select defaultValue="Jack" size="small" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack" className={styles.selectOptionSty}>Jack</Option>
          </Select>
        </div> */}
      </div>
      <div
        id="RightTable1v"
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
