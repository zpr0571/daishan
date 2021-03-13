import request from '@/utils/request';


/**
 * 进度数值统计
 * @param {*}} params
 */
export async function projectStatistics(params) {
  return request(`/ds/projectStatistics/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 工程项目进展
 * @param {*}} params
 */
export async function projectStatisticsDetail(params) {
  return request(`/ds/projectStatisticsDetail/list`, {
    method: 'POST',
    data: params,
  });
}


/**
 * 项目进度详情
 * @param {*}} params
 */
export async function projectProgress(params) {
  return request(`/ds/projectProgress/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 投资来源占比
 * @param {*}} params
 */
export async function projectInvestProportion(params) {
  return request(`/ds/projectInvestProportion/list`, {
    method: 'POST',
    data: params,
  });
}

/**
 * 工程地图数据
 * @param {*}} params
 */
export async function projectBigData(params) {
  return request(`/ds/projectBigData/list`, {
    method: 'POST',
    data: params,
  });
}
