import React, { useEffect, useState } from 'react';
import { message } from 'antd'
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
import { Select } from 'antd'
import styles from '../../index.less'
import { useRequest } from 'ahooks';
import { riskInfo } from '../../service'

const { DataView } = DataSet;
export default () => {

  const tableDataApi = useRequest(() => riskInfo({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        tableData(data[0])
        console.log(199, data)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(fdata) {
    const data = [
      { item: '行政处罚历史', value: fdata.punishmentHistory },
      { item: '财产风险', value: fdata.propertyRisk },
      { item: '股权风险', value: fdata.equityRisk },
      { item: '经营异常', value: fdata.abnormalOperation },
      { item: '变更信息', value: fdata.changeInformation },
      { item: '失信被执行人', value: fdata.brokenPromise },
      { item: '被执行人信息', value: fdata.brokenPromiseInfo },
    ];

    const dv = new DataView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['value'], // 展开字段集
      key: 'user', // key字段
      value: 'score', // value字段
    });

    const chart = new Chart({
      container: 'LeftTable3',
      autoFit: true,
      height: 500,
    });
    chart.data(dv.rows);
    chart.scale('score', {
      min: 0,
      max: 1000,
    });
    chart.legend({
      position: 'top-left',
      offsetY: 30,
      offsetX: 20,
      itemName: {
        style: {
          fill: '#8C8C8C'
        },
        formatter: (text) => {
          return text === 'value'?'风险':text
        }
      },
    });
    chart.coordinate('polar', {
      radius: 0.8,
    });
    chart.axis('item', {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            stroke: 'rgba(255, 255, 255, 0.15)'
          }
        },
      }
    });
    chart.axis('score', {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            stroke: 'rgba(255, 255, 255, 0.15)'
          }
        },
      },
    });

    // chart.tooltip({
    //   shared: true,
    //   showCrosshairs: true,
    //   crosshairs: {
    //     type: 'xy',
    //     line: {
    //       style: {
    //         stroke: '#565656',
    //         lineDash: [4],
    //       },
    //     },
    //     follow: true
    //   }
    // });

    chart
      .area()
      .position('item*score')
      // .color('user');
      .color('user', ['#FEB61B'])
      // .tooltip('item*score', false);

    chart
      .line()
      .position('item*score')
      .color('user', ['#FEB61B'])
      .shape('line')
      .tooltip('item*score', (name, val) => {
        return {
          name: '风险数值',
          value: val,
        };
      });
    chart.render();
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>风险信息</span>
        </div>
      </div>
      <div
        id="LeftTable3"
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
