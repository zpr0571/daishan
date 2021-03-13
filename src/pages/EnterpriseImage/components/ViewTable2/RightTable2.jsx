import React, { useEffect, useState } from 'react';
import { message } from 'antd'
import { Chart } from '@antv/g2';
import styles from '../../index.less'
import { useRequest } from 'ahooks';
import { companyProfitInfo } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => companyProfitInfo({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        data.map(d => {
          d.type = 'sl';
        })
        tableData(data)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(data) {

    const chart = new Chart({
      container: 'RightTable2',
      autoFit: true,
      height: 500,
      padding: [80, 30, 30, 70],
    });

    chart.data(data);
    chart.scale({
      profitMonth: {
        range: [0, 1],
      },
      profitAmt: {
        nice: true,
      },
    });

    chart.legend({
      position: 'top-left',
      offsetY: 30,
      offsetX: 14,
      itemName: {
        style: {
          fill: '#8C8C8C'
        },
        formatter: (text) => {
          return text === 'sl'?'数量':text
        }
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('profitAmt', {
      label: {
        formatter: (val) => {
          return val ;
        },
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

    chart
      .line()
      .position('profitMonth*profitAmt')
      .color('type')
      .shape('smooth')
      .tooltip('profitMonth*profitAmt', (name, val) => {
        return {
          name: '数量',
          value: val,
        };
      });

    chart.render();
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>利润趋势</span>
        </div>
      </div>
      <div
        id="RightTable2"
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
