import React, { useState, useReducer} from 'react';
import { Row, Col } from 'antd';
import data from './data';
import styles from './index.less';

import ProdList from '../ProdList/ProdList';
import { BusinessContext } from '@/components/ContextManager/index';


const businessInitialState = { businessVisible: false };

const businessReducer = (state = businessInitialState, action) => {
  switch (action.type) {
    case 'businessVisibleDispatch':
      return Object.assign({}, state, { businessVisible: !state.businessVisible });
    default:
      return state
  }
}

export default (props = {}) => {
  const [ state, dispatch ] = useReducer(businessReducer, businessInitialState);
  function openHtml(data)  {
    if (data.btnState === "process") {
      dispatch({ type: "businessVisibleDispatch" });
    }
  }

  return (
    <>
      <Row offset={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        {
          data.workrouters&&data.workrouters.map((item, index) =>
            <Col className="gutter-row" key={item.imgIndex} span={4} offset={(index%5===0)?0:1}>
              <div className={styles.businessItem} onClick={() => openHtml(item)}>
                <div className={styles.businessItemIcon}>
                  <img alt="example" src={require('@/assets/workbench/businessnew'+`${item.imgIndex+1}`+'.png')} />
                </div>
                <div className={styles.businessItemLabel}>{item.name}</div>
              </div>
            </Col>
          )
        }
      </Row>
      <BusinessContext.Provider value={{ state, dispatch }}>
        {
          state.businessVisible?
            <ProdList />
          :null
        }
      </BusinessContext.Provider>
    </>
  );
};
