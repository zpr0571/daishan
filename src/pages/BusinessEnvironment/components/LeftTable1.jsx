import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Select } from 'antd'

import { rgb2arr } from '@antv/l7';

import { message } from 'antd';
import { useRequest } from 'ahooks';
import styles from './old-system.less'

export default () => {
  const data = { "status": 0, "message": null, "result": [{ "createTime": "2021-03-09 16:33:17", "updateTime": "2021-03-10 00:27:04", "id": 1, "town": "衡山镇", "sales": 850, "revenue": 610.00 }, { "createTime": "2021-03-09 16:33:21", "updateTime": "2021-03-10 00:27:10", "id": 2, "town": "高亭镇", "sales": 900, "revenue": 490.00 }, { "createTime": "2021-03-09 16:33:23", "updateTime": "2021-03-10 00:27:16", "id": 3, "town": "东沙镇", "sales": 1600, "revenue": 610.00 }, { "createTime": "2021-03-09 16:33:25", "updateTime": "2021-03-10 00:27:26", "id": 4, "town": "岱西镇", "sales": 500, "revenue": 380.00 }, { "createTime": "2021-03-09 16:33:28", "updateTime": "2021-03-10 00:27:33", "id": 5, "town": "长途镇", "sales": 482, "revenue": 240.00 }, { "createTime": "2021-03-09 16:33:32", "updateTime": "2021-03-10 00:27:42", "id": 6, "town": "岱东镇", "sales": 162, "revenue": 38.00 }, { "createTime": "2021-03-09 16:33:34", "updateTime": "2021-03-10 00:27:54", "id": 7, "town": "秀山乡", "sales": 912, "revenue": 720.00 }] }

  console.log("2222222", 22222222222);
  const tableDataApi = () => {

    data.result.map(d => {
      d.revenue = parseFloat(d.revenue)
    })
    tableData(data.result)
    console.log("2222222", data.result);
  }
  console.log("1111111", 22222222222);
  function tableData (data) {
    console.log(data);

    const chart = new Chart({
      container: 'LeftTable1v',
      autoFit: true,
      padding: [80, 20, 30, 50],
    });

    chart.data(data.result);
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

    chart.axis('town', {
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
      .position('town*revenue')
      .shape('text-interval')
      .color('l(90) 0:#00A6F8 1:#00E7EA') // 定义柱状图渐变色
      .size(16)
      .tooltip('town*revenue', (name, val) => {
        return {
          name: '亩均税收',
          value: val,
        };
      });

    chart.render();
    console.log('**9**')
  }

  function handleChange (value) {
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
