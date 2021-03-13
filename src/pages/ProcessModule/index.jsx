import React, { useState, useReducer, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { RightOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { Button, message } from 'antd';
import { ProcessModuleContext } from '@/components/ContextManager/index';
import ProCard from '@ant-design/pro-card';
import data from './data';
import FooterButton from './FooterButton';
import { getDefinitionKey, queryProductConfig, queryNextRoleUser, elementmodelGetList } from './service'


const ProcessModuleInitialState = {
  ProcessModuleCollapsed: false,
  tabsPageState: 'backlog',
  prod: {},
  flowData: {},
  flowKeys: {},
  prodConfig: {},
  nextPersonListArr: [],
  nextNextPersonListArr: [],
  elementList: [],
};

const ProcessModuleReducer = (state = ProcessModuleInitialState, action) => {
  switch (action.type) {
    case 'ProcessModuleCollapsedDispatch':
      return Object.assign({}, state, { ProcessModuleCollapsed: !state.ProcessModuleCollapsed });
    case 'tabsDispatch':
      return Object.assign({}, state, { tabsPageState: action.params });
    case 'ProdDispatch':
      return Object.assign({}, state, { prod: action.params?.prod});
    case 'flowDataDispatch':
      return Object.assign({}, state, { flowData: action.params?.firstFlowData});
    case 'flowKeysDispatch':
      return Object.assign({}, state, { flowKeys: action.params?.flowKeys});
    case 'prodConfigDispatch':
      return Object.assign({}, state, { prodConfig: action.params});
    case 'nextRoleUserDispatch':
      return Object.assign({}, state, { nextPersonListArr: action.params?.nextPersonListArr, nextNextPersonListArr: action.params?.nextNextPersonListArr});
    case 'elementDispatch':
      return Object.assign({}, state, { elementList: action.params});
      default:
      return state
  }
}

export default () => {
  let location = useLocation(); // 获取父页面传的参数

  const [ state, dispatch ] = useReducer(ProcessModuleReducer, ProcessModuleInitialState);

  // 产品数据存到reducer
  useEffect(() => { dispatch({type: 'ProdDispatch', params: location?.state}) }, [location?.state?.prod]);
  // 获取流程数据并存入reducer
  const flowRequest = useRequest(() => getDefinitionKey({
    prodNo: location?.state?.prod?.prodNo,
    type: location?.state?.prod?.creditType==='1'?'4':'11'
  }), {
    refreshDeps: [location?.state?.prod?.prodNo],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        dispatch({type: 'flowDataDispatch', params: data});
        dispatch({type: 'flowKeysDispatch', params: data});
      } else {
        message.error(remsg)
      }
    },
    onError: (error, params) => {
      message.error(error)
    }
  });

  // 获取产品配置信息
  const prodConfig = useRequest(() => queryProductConfig({
    prodNo: location?.state?.prod?.prodNo,
  }), {
    refreshDeps: [location?.state?.prod?.prodNo],
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        dispatch({type: 'prodConfigDispatch', params: data});
      } else {
        message.error(remsg)
      }
    },
    onError: (error, params) => {
      message.error(error)
    }
  });

  // 获取下一步执行人信息
  const nextRoleUser = useRequest(() => queryNextRoleUser({
    // amount: value||null,
    definitionId: state.flowData?.definitionId || state.flowData?.definitionKey,
    taskName: state.flowData?.taskName,
    nextTaskName: state.flowData?.nextTaskName,
    instanceId: state.flowData?.processInstanceId,
  }), {
    manual: true,
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        let nextPersonListArr = []
        let nextNextPersonListArr = []
        let isNextCountersign = null;
        if(state.flowData?.isCountersignBranch){
          // 分支 暂时注释
          // isNextCountersign = state.flowData?.isCountersignBranch?.split(',')[taskmodel.taskIndex]
        } else {
          isNextCountersign = data.nextIsCountersign;
        }
        const fdata = state.flowData;
        fdata.isCountersign = isNextCountersign;
        if ( isNextCountersign === '1') {
          nextPersonListArr = data.nextUserIds?[]:data.records
          fdata.nextUserIds = data.nextUserIds||null;
          if(data.nextNextUserId){
            // this.props.form.setFieldsValue({
            //   nextNextUserId: data.nextNextUserId
            // });
            nextNextPersonListArr = []
          } else {
            nextNextPersonListArr = data.nextNextRoleUser||[]
          }
        } else {
          fdata.nextUserId = data.nextUserId||null;
          nextPersonListArr = data.nextUserId?[]:data.records
          nextNextPersonListArr = []
        }
        dispatch({type: 'nextRoleUserDispatch', params: {
          nextPersonListArr, nextNextPersonListArr
        }});
      } else {
        message.error(remsg)
      }
    },
    onError: (error, params) => {
      message.error(error)
    }
  });

  useEffect(() => {
    if(state.flowData?.taskName){
      nextRoleUser.run()
    }
  }, [state.flowData?.taskName]);



  // 获取流程业务列表
  const elementModel = useRequest(() => elementmodelGetList({
    prodNo: state?.prod?.prodNo,
    taskName: state.flowData?.taskName,
    type: state.flowData?.flowKey||state.flowKeys?.type,
  }), {
    manual: true,
    onSuccess: (resoult, params) => {
      const { data, recode, remsg } = resoult;
      if (recode === '000000') {
        dispatch({type: 'elementDispatch', params: data});
      } else {
        message.error(remsg)
      }
    },
    onError: (error, params) => {
      message.error(error)
    }
  });

  useEffect(() => {
    let type = state.flowData?.flowKey||state.flowKeys?.type;
    if(type){
      elementModel.run()
    }
  }, [state?.prod?.prodNo, state.flowData?.taskName, state.flowData?.flowKey, state.flowKeys?.type]);

  function onTabChange(key) {
    dispatch({type: 'tabsDispatch', params: key});
  }

  return (
    <PageContainer
      title=" "
      fixedHeader
      tabList={data.pageTabList}
      onTabChange={onTabChange}
      footer={[
        <FooterButton key="footer"/>
      ]}
    >
      <ProcessModuleContext.Provider value={{ state, dispatch }}>
        {
          state.tabsPageState==="backlog"?
            <ProCard title="业务办理" headerBordered gutter={[0, 16]} key='backlog'>
              <ProCard
                title="可折叠-受控自定义"
                bordered
                extra={
                  <RightOutlined
                    rotate={!state?.ProcessModuleCollapsed ? 90 : undefined}
                    onClick={() => {
                      dispatch({type: 'ProcessModuleCollapsedDispatch'})
                    }}
                  />
                }
                style={{ marginTop: 16 }}
                headerBordered
                collapsed={state?.ProcessModuleCollapsed}
              >
                内容
              </ProCard>
            </ProCard>
          :null
        }
        {
          state.tabsPageState==="record"?
            <ProCard title="办理记录" headerBordered gutter={[0, 16]} key='record'>
              123123123123123123
            </ProCard>
          :null
        }
      </ProcessModuleContext.Provider>


    </PageContainer>
  );
};
