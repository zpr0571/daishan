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
 * 区域亩均销售、亩均税收
 * @param {*}} params
 */
export async function townsRevenue(params) {
  return request(`/ds/townsRevenue/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 行业分布
 * @param {*}} params
 */
export async function companyIndustry(params) {
  return request(`/ds/companyIndustry/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 税收TOP10
 * @param {*}} params
 */
export async function companyRevenueRank(params) {
  return request(`/ds/companyRevenueRank/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * center展示信息
 * @param {*}} params
 */
export async function companyBigData(params) {
  return request(`/ds/companyBigData/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 占地分析
 * @param {*}} params
 */
export async function areaCovers(params) {
  return request(`/ds/areaCovers/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 区域分析
 * @param {*}} params
 */
export async function townsCovers(params) {
  return request(`/ds/townsCovers/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 排污企业分布
 * @param {*}} params
 */
export async function townsCoversPollution(params) {
  return request(`/ds/townsCoversPollution/list`, {
    method: 'POST',
    data: params,
  });
}
