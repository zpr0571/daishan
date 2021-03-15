import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { companyIndustry } from '../service'


export default () => {

  const tableDataApi = useRequest(() => companyIndustry({}), {
    refreshDeps: [],
    onSuccess: (result, params) => {
      const  data  = result.result;
      console.log(data);
      let companyTotal = 0;
      if (result.status ===0 ) {
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
      container: 'Chart1',
      autoFit: true,
      height: 500,
      // padding: [50, 20, 15, 70],
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
      position: 'right',
      offsetX:-100,
      textStyle:{
        fontSize: 32,//字体大小
        color: '#ffffff'//字体颜色
      },

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
          fontSize: 37,
          fontFamily: 'SourceHanSansCN-Normal',
          fill: "rgba(255, 255, 255, 1)",
          lineHeight: 45,
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
      <div
        id="Chart1"
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
