import React, { useEffect, useState } from 'react';
import { Chart, registerShape } from '@antv/g2';
import styles from '../../index.less'
import * as math from 'mathjs'
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { projectStatisticsDetail } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => projectStatisticsDetail({
    type: '2'
  }), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        let companyTotal = data[0].projectCj+data[0].projectSg+data[0].projectSw+parseFloat(data[0].projectTc)+parseFloat(data[0].projectTh);

        data[0].projectCjpercent = parseFloat((data[0].projectCj/companyTotal).toFixed(2));
        data[0].projectSgpercent = parseFloat((data[0].projectSg/companyTotal).toFixed(2));
        data[0].projectSwpercent = parseFloat((data[0].projectSw/companyTotal).toFixed(2));
        data[0].projectTcpercent = parseFloat((data[0].projectTc/companyTotal).toFixed(2));
        data[0].projectThpercent = parseFloat((data[0].projectTh/companyTotal).toFixed(2));
        tableData(data[0])
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(fdata) {
    const data = [
      { type: '筹建项目', value: fdata.projectCjpercent},
      { type: '施工项目', value: fdata.projectSgpercent },
      { type: '收尾项目', value: fdata.projectSwpercent },
      { type: '停缓建项目', value: fdata.projectThpercent },
      { type: '投产项目', value: fdata.projectTcpercent },
    ];

    const chart = new Chart({
      container: 'LeftTables3',
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
        return `${Number(math.format(data.value * 100, 14))}%`;
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
          <span>本季度工程项目进度汇总</span>
        </div>
      </div>
      <div
        id="LeftTables3"
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
