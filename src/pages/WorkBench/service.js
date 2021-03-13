import request from '@/utils/request';

export async function productList(params) {
  return request(`/accounts/pdm/product/prodManageQuery`, {
    method: 'POST',
    data: params,
  });
}
