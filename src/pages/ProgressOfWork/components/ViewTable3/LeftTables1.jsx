import React, { useEffect, useState } from 'react';
import { Chart, registerShape } from '@antv/g2';
import styles from '../../index.less'

import { message } from 'antd';
import { useRequest } from 'ahooks';
import { projectStatisticsDetail } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => projectStatisticsDetail({
    type: '1'
  }), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        data.map(d => {
          d.projectTc = parseFloat(d.projectTc);
          d.projectTh = parseFloat(d.projectTh);
        })
        tableData(data[0])
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(fdata) {
    const data = [
      { type: '筹建项目', value: fdata.projectCj },
      { type: '施工项目', value: fdata.projectSg },
      { type: '收尾项目', value: fdata.projectSw },
      { type: '停缓建项目', value: fdata.projectTh },
      { type: '投产项目', value: fdata.projectTc },
    ];

    let max = 0;
    data.forEach(function(obj) {
      if (obj.value > max) {
        max = obj.value;
      }
    });

    // 自定义 other 的图形，增加两条线
    registerShape('interval', 'slice-shape', {
      draw(cfg, container) {
        const points = cfg.points;
        const origin = cfg.data;
        const percent = origin.value / max;
        const xWidth = points[2].x - points[1].x;
        const width = xWidth * percent;
        let path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['L', points[0].x + width, points[2].y]);
        path.push(['L', points[0].x + width, points[3].y]);
        path.push('Z');
        path = this.parsePath(path);
        return container.addShape('path', {
          attrs: {
            fill: cfg.color,
            path,
          },
        });
      },
    });

    const chart = new Chart({
      container: 'LeftTables1',
      autoFit: true,
      height: 500,
      padding: [30, 10, 0, 100],
    });

    chart.coordinate('theta', {
      radius: 0.8,
    });

    chart.data(data);

    chart.legend({
      position: 'left',
      offsetX: 10,
      label: {
        style: {
          fontSize: 20,
          fill: '#ff0'
        }
      }
    });

    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });

    chart
      .interval()
      .adjust('stack')
      .position('value')
      .color('type', ['#FF647C', '#FFBE75', '#3EE2A5', '#2CE4E7', '#6D77FD', '#BD7FD9', '#FC8451' ])
      .shape('slice-shape')
      .label('type', {
        offset: '-70%',
        layout: {
          type: 'limit-in-shape',
        },
        background: {
          style: {
            fill: '#000',
            fillOpacity: '0.25',
            radius: 2,
          },
          padding: 2,
        },
      });
    chart.interaction('element-active');

    chart.render();
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>年度工程项目进度汇总</span>
        </div>
      </div>
      <div
        id="LeftTables1"
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
