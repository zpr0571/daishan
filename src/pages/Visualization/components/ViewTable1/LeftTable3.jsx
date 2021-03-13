import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Select } from 'antd'
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { companyRevenueRank } from '../../service'

export default () => {

  function sordId(a, b){
    console.log(13333, a.rank, b.rank)
    return b.rank - a.rank;
  }

  const tableDataApi = useRequest(() => companyRevenueRank({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        let cdd = data.sort(sordId)
        console.log(222, cdd, data)
        tableData(cdd)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(data) {
    // const data = [
    //   { companyName: '巴西', revenue: 18203 },
    //   { companyName: '印尼', revenue: 23489 },
    //   { companyName: '美国', revenue: 29034 },
    //   { companyName: '印度', revenue: 104970 },
    //   { companyName: '中国', revenue: 131744 },
    // ];
    const chart = new Chart({
      container: 'LeftTable3v',
      autoFit: true,
      height: 200,
      padding: [50, 200, 10, 20],
    });

    chart.data(data);

    chart.axis('revenue', false);

    chart.axis('companyName', false);

    chart.coordinate().transpose();
    chart.tooltip({
      showMarkers: false
    });
    chart.interaction('active-region');
    chart
      .interval()
      .position('companyName*revenue')
      .shape('text-interval')
      .color('l(0) 0:#14C3EC 0.6:#4EE8DA 0.9:#E19460 1:#F6F4F7') // 定义柱状图渐变色
      .size(6)
      .label('companyName', {
        style: {
          fill: '#ff0',
        },
        offset: 10,
      })
      .tooltip('companyName*revenue', (name, val) => {
        return {
          name: '税收',
          value: val,
        };
      });
    chart.render();
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>税收 TOP 10</span>
          <span>单位：万元</span>
        </div>
        {/* <div className={styles.selectTable}>
          <Select defaultValue="Jack" size="small" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack" className={styles.selectOptionSty}>Jack</Option>
          </Select>
        </div> */}
      </div>
      <div
        id="LeftTable3v"
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
