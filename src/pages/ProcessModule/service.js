import request from '@/utils/request';

/**
 *获取流程第一步流程配置信息
 * @export
 * @param {*} params
 * @returns
 */
export async function getDefinitionKey(params) {
  return request(`/accounts/flowkeys/getDefinitionKey`, {
    method: 'POST',
    data: params,
  });
}

 /**
 * 产品配置信息查询
 * @export
 * @param {*} params
 * @returns
 */
export async function queryProductConfig(params) {
  return request(`/accounts/pdm/product/${params.prodNo}`, {
    method: 'GET'
  });
}

/**
 * 新增贷款-获取下一步执行人/根据金额判断
 * @param {*} params
 */
export async function queryNextRoleUser(params) {
  return request(`/accounts/applyPro/queryNextRoleUser`, {
    method: 'POST',
    data: params
  });
}

/**
 * 获取页面数据
 * @param {*} params
 */
export async function elementmodelGetList(params) {
  return request(`/accounts/elementconf/getListByTaskName`, {
    method: 'POST',
    data: params
  });
}
