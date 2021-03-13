import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Select } from 'antd'
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { companyIndustry } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => companyIndustry({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      let companyTotal = 0;
      if (recode === '000000') {
        data.map(d => {
          companyTotal+=parseFloat(d.companyCount);
          d.companyCount = parseFloat(d.companyCount);
        })

        data.map(d => {
          d.percent = parseFloat((d.companyCount/companyTotal).toFixed(2))
        })
        console.log(26, data)
        tableData(data)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(data) {

    const chart = new Chart({
      container: 'LeftTable2v',
      autoFit: true,
      height: 500,
      padding: [50, 20, 15, 70],
    });

    chart.data(data);
    chart.scale('percent', {
      formatter: (val) => {
        val = val * 100 + '%';
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
    .position('percent')
    .color('industry', ['#FF647C', '#FFBE75', '#3EE2A5', '#2CE4E7', '#6D77FD'])
    .label('percent', (percent) => {
      return {
        content: (data) => {
          return `${data.industry}: ${percent * 100}%`;
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
    .tooltip('industry*percent', (item, percent) => {
      percent = percent * 100 + '%';
      return {
        name: item,
        value: percent,
      };
    });

    chart.interaction('element-active');

    chart.render();
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>行业分布</span>
          <span>单位：家</span>
        </div>
        {/* <div className={styles.selectTable}>
          <Select defaultValue="Jack" size="small" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack" className={styles.selectOptionSty}>Jack</Option>
          </Select>
        </div> */}
      </div>
      <div
        id="LeftTable2v"
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
