import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import G6 from '@antv/g6';
import { useRequest } from 'ahooks';
import styles from '../../index.less'
import { companyRelation } from '../../service'

export default () => {

  const tableDataApi = useRequest(() => companyRelation({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        tableData(data)
      } else {
        message.error('请求出错')
      }
    },
  });

  function tableData(ydata) {
    let nodes = [];
    let edges = [];
    for(let obj of ydata) {
      nodes.push({
        id: obj.id,
        x: obj.x,
        y: obj.y,
        label: obj.name,
        style: {
          fill: obj.color,
          stroke: obj.color,
        },
        labelCfg: {
          position: 'end',
          style: {
            fill: 'rgba(255, 255, 255, 0.65)',
          },
        }
      })
      if(obj.targetId){
        edges.push({
          source: obj.targetId.split(',')[0],
          target: obj.targetId.split(',')[1],
          type: 'cubic-horizontal',
          style: {
            stroke: obj.colorLine
          }
        })
      }
    }

    const data = {
      nodes: nodes,
      edges: edges,
    };

    const width = document.getElementById('RightTable1').scrollWidth;
    const height = document.getElementById('RightTable1').scrollHeight || 500;
    const graph = new G6.Graph({
      container: 'RightTable1',
      width,
      height,
      fitCenter: true,
      modes: {
        default: ['drag-canvas'],
      },
      defaultEdge: {
        type: 'cubic-horizontal',
      },
    });
    graph.data(data);
    graph.render();
  }

  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>
          <span>关系网络</span>
        </div>
      </div>
      <div
        id="RightTable1"
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
