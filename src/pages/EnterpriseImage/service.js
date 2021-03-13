import request from '@/utils/request';

/**
 * 企业基本信息
 * @param {企业id}} params
 */
export async function companyInfoList(params) {
  return request(`/ds/companyInfo/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 企业销售
 * @param {*} params
 */
export async function ccompanySellInfoList(params) {
  return request(`/ds/companySellInfo/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 风险信息
 * @param {*} params
 */
export async function riskInfo(params) {
  return request(`/ds/riskInfo/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 关系网络
 * @param {*} params
 */
export async function companyRelation(params) {
  return request(`/ds/companyRelation/list`, {
    method: 'POST',
    data: params,
  });
}


/**
 * 利润趋势
 * @param {*} params
 */
export async function companyProfitInfo(params) {
  return request(`/ds/companyProfitInfo/list`, {
    method: 'POST',
    data: params,
  });
}


/**
 * 企业对外投资
 * @param {*} params
 */
export async function opCompanyInfo(params) {
  return request(`/ds/opCompanyInfo/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 法定代表人对外投资
 * @param {*} params
 */
export async function opCompanyInfoLegal(params) {
  return request(`/ds/opCompanyInfoLegal/list`, {
    method: 'POST',
    data: params,
  });
}

