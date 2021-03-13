import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { useRequest } from 'ahooks';
import styles from '../../index.less'
import { opCompanyInfo, opCompanyInfoLegal } from '../../service'


export default () => {

  const [opCompanyInfoData, setOpCompanyInfo] = useState(null);
  const [opCompanyInfoLegalData, setOpCompanyInfoLegal] = useState(null);

  const tableDataApi1 = useRequest(() => opCompanyInfo({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        setOpCompanyInfo(data)
      } else {
        message.error('请求出错')
      }
    },
  });

  const tableDataApi2 = useRequest(() => opCompanyInfoLegal({}), {
    refreshDeps: [],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        console.log(32, data.length)
        setOpCompanyInfoLegal(data)
      } else {
        message.error('请求出错')
      }
    },
  });





  const columns1 = [
    {
      title: '企业名称',
      dataIndex: 'opComName',
      key: 'opComName',
      width: 300,
    },
    {
      title: '注册资本',
      dataIndex: 'opRegAmt',
      key: 'opRegAmt',

    },
    {
      title: '注册资本币种',
      dataIndex: 'opRegCurrency',
      key: 'opRegCurrency',
    },
    {
      title: '法人代表姓名',
      key: 'opLegalName',
      dataIndex: 'opLegalName',
    }
  ];

  const columns2 = [
    {
      title: '企业名称',
      dataIndex: 'opComName',
      key: 'opComName',
      width: 300,
    },
    {
      title: '注册号',
      dataIndex: 'opRegNo',
      key: 'opRegNo',

    },
    {
      title: '法人代表姓名',
      dataIndex: 'opLegalNae',
      key: 'opLegalNae',
    },
    {
      title: '企业状态',
      key: 'opStatus',
      dataIndex: 'opStatus',
    }
  ];


  // 滚动条参数
  const scroll = {
    // 最大高度，内容超出该高度会出现滚动条
    height: 100,
  }

  const components = {
    table (props) {
        const { className } = props;
        return (
            <Scrollbars
                style={scroll}>
                  <table className={className}>
                   { props.children }
                  </table>
            </Scrollbars>
        )
    }
  }

  return (
    <div className={styles.textCon}>
      <div className={`${styles.rightText} ${styles.conText}`}>
        <span className={styles.comTitle}>画像信息</span>
        <div className={styles.moduleTabs}>
          <div className={`${styles.tabsOne} ${styles.activeTaps}`}>
            <span>对外投资</span>
          </div>
          <div className={styles.tabsOne}>
            <span>对外任职</span>
          </div>
          <div className={styles.tabsOne}>
            <span>企业年报</span>
          </div>
          <div className={styles.tabsOne}>
            <span>项目建设</span>
          </div>
          <div className={styles.tabsOne}>
            <span>惠企政策</span>
          </div>
          <div className={styles.tabsOne}>
            <span>问题诉求</span>
          </div>
        </div>
        <div className={styles.currentTable}>
          {
            opCompanyInfoData&&<Table
              columns={columns1}
              dataSource={opCompanyInfoData}
              rowClassName={styles.tableRow}
              title={()=>`企业对外投资（${opCompanyInfoData.length}）`}
              pagination={false}
              scroll={{y: 100}}
              components={components}
              />
          }
          {
            opCompanyInfoLegalData&&<Table
            columns={columns2}
            dataSource={opCompanyInfoLegalData}
            rowClassName={styles.tableRow}
            title={()=>`法定代表人对外投资（${opCompanyInfoLegalData.length}）`}
            pagination={false}
            scroll={{y: 100}}
            components={components}
            />
          }
        </div>
      </div>
    </div>
  );
};
