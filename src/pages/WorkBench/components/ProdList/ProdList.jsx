import React, { useState, useEffect, useContext, useMemo } from "react";
import { useRequest } from 'ahooks';
import { Modal, List, Pagination, Card } from "antd";
import { useHistory } from 'react-router-dom';
import Ellipsis from '@/components/Ellipsis';
import { BusinessContext } from '@/components/ContextManager/index';
import { productList } from '../../service'
import styles from '../../index.less'




const modalProd = () => {
  const  [prodListvisible, setProdListVisible] =  useState(false);
  const { state, dispatch } = useContext(BusinessContext);
  let history = useHistory()
  /**
   *  获取产品列表接口
   */
  const prodData = useRequest(
    ({ current, pageSize }) => productList({ pageNum: current, pageSize, prodStatus: '1' }),
    {
      paginated: true,
      formatResult: x=>{
        return {
          list: x?.data?.records,
          total: x?.data?.total
        }
      }
    }
  );

  const newLoan = (item) => {
    if (item.prodStatus !== '1') {
      message.error('该产品已停用,请选择其他产品')
    } else {
      // this.getDefinitionKey(item)
      history.push({
        pathname: '/process-module',
        state: {prod: item, isFirstStep: true}
      })
    }
  }

  const prodMenu = () => {
    const {data, pagination, loading} = prodData;
    console.log(10, prodData, data, pagination, loading)
    return (
      <>
        <List
          grid={{ column: 5 }}
          dataSource={data?.list}
          loading={loading}
          renderItem={ item => (
            <List.Item>
              <Card title={<Ellipsis tooltip lines={1}>{item.prodName}</Ellipsis>} className={styles.prodsty} onClick={() => newLoan(item)} >
                <p className={styles.a}>{item.loanAmount&&item.loanAmount.loanMaxAmt}</p>
                <p className={styles.b}>最高可借(元)</p>
                <p className={styles.b}>
                  {item.creditType==='1'?'循环':null}
                  {item.creditType==='2'?'非循环':null}
                </p>
              </Card>
            </List.Item>
          )}
        />
        <Pagination
          {...pagination}
          showQuickJumper
          showSizeChanger
          onShowSizeChange={pagination.onChange}
          style={{ marginTop: 16, textAlign: 'right' }}
        />
      </>
    )

  }

  useEffect(() => {
    setProdListVisible(state.businessVisible)
    return () => {

    };
  }, [state.businessVisible]);

  const handleCancel = e => {
    setProdListVisible(!prodListvisible)
    dispatch({type: 'businessVisibleDispatch'})
  };

  return useMemo(() => {
    return (
      <>
        <Modal
          title="选择金融产品"
          width="60%"
          visible={prodListvisible}
          onCancel={handleCancel}
          footer={null}
        >
          {prodMenu()}
        </Modal>
      </>
    )
  }, [prodListvisible, prodData?.loading])
}

export default modalProd;
