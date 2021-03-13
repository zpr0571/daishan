import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import DataSet from '@antv/data-set';
import { useRequest } from 'ahooks';
import { Chart } from '@antv/g2';
import { Select } from 'antd'
import styles from '../../index.less'
import { ccompanySellInfoList } from '../../service'

export default () => {
  const tableData = useRequest(() => ccompanySellInfoList({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        data.map(d => {
          d.country = '数量';
        })
        // setData(data)
        tableMap(data)
      } else {
        message.error('请求出错')
      }
    },
  });


  function tableMap(data) {
    const dv = new DataSet.DataView().source(data);
    dv.transform({
      type: 'percent',
      field: 'sellAmt',
      dimension: 'country',
      groupBy: ['sellMonth'],
      as: 'percent',
    });

    const chart = new Chart({
      container: 'LeftTable2',
      autoFit: true,
      padding: [70, 20, 30, 70],
    });

    chart.data(dv.rows);
    chart.scale({
      sellMonth: {
        range: [0, 1],
      },
      percent: {
        formatter: (value) => {
          value = +value || 0;
          value = +value * 100;
          return value;
        },
        alias: 'percent(%)',
      },
    });

    chart.axis('sellMonth', {
      title: null,
      tickLine: null,
    });
    chart.axis('sellAmt', {
      label: {
        autoEllipsis: true
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

    chart.legend({
      position: 'top-left',
      offsetY: 30,
      offsetX: 20,
      itemName: {
        style: {
          fill: '#8C8C8C'
        }
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });
    chart
      .area()
      .position('sellMonth*sellAmt')
      .shape('smooth')
      .color('country', ['#2CE4E7', '#FFBE75', '#3EE2A5', '#2CE4E7', '#6D77FD', '#BD7FD9', '#FC8451' ]);
    chart.render();
  }

  // useEffect(() => {
  //   tableData.run();
  //   console.log(33, data, tableData)

  // }, []);

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>销售趋势</span>
        </div>
      </div>
      <div
        id="LeftTable2"
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
