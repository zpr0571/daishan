/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/accounts': {
      target: 'http://172.1.2.109/accounts/', // 测试地址
      // target: 'http://xindu.pettyloan.sun-fintech.com/accounts/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/accounts': '' },
    },
    '/ds': {
      target: 'http://127.0.0.1:5601/emp/', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/ds': '' },
    },
    '/admin': {
      target: 'http://172.1.2.109:4002', // 测试地址
      // target: 'http://pettyloanmanager.sun-fintech.com/admin/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/admin': '' },
    },
    '/activity': {
      target: 'http://172.1.2.109:4001', // 测试地址
      // target: 'http://xindu.pettyloan.sun-fintech.com//activity/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/activity': '' },
    },
    '/analysis': {
      target: 'http://10.0.2.239:8088/', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/analysis': '' },
    },
    '/ip': {
      target: 'http://pv.sohu.com/cityjson?ie=utf-8', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/ip': '' },
    },
    '/addres': {
      target:
        'https://api.map.baidu.com/location/ip?ak=0zKlcYDzVIU19eZTRCGNk8XzYmvHIFGQ&coor=bd09ll', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/addres': '' },
    },
  },
  test: {
    '/accounts': {
      target: 'http://172.1.2.109/accounts/', // 测试地址
      // target: 'http://xindu.pettyloan.sun-fintech.com/accounts/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/accounts': '' },
    },
    '/admin': {
      target: 'http://172.1.2.109:4002', // 测试地址
      // target: 'http://pettyloanmanager.sun-fintech.com/admin/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/admin': '' },
    },
    '/activity': {
      target: 'http://172.1.2.109:4001', // 测试地址
      // target: 'http://xindu.pettyloan.sun-fintech.com//activity/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/activity': '' },
    },
    '/analysis': {
      target: 'http://10.0.2.239:8088/', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/analysis': '' },
    },
    '/ip': {
      target: 'http://pv.sohu.com/cityjson?ie=utf-8', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/ip': '' },
    },
    '/addres': {
      target:
        'https://api.map.baidu.com/location/ip?ak=0zKlcYDzVIU19eZTRCGNk8XzYmvHIFGQ&coor=bd09ll', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/addres': '' },
    },
  },
  pre: {
    '/accounts': {
      target: 'http://172.1.2.109/accounts/', // 测试地址
      // target: 'http://xindu.pettyloan.sun-fintech.com/accounts/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/accounts': '' },
    },
    '/admin': {
      target: 'http://172.1.2.109:4002', // 测试地址
      // target: 'http://pettyloanmanager.sun-fintech.com/admin/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/admin': '' },
    },
    '/activity': {
      target: 'http://172.1.2.109:4001', // 测试地址
      // target: 'http://xindu.pettyloan.sun-fintech.com//activity/', // 生产地址
      changeOrigin: true,
      pathRewrite: { '^/activity': '' },
    },
    '/analysis': {
      target: 'http://10.0.2.239:8088/', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/analysis': '' },
    },
    '/ip': {
      target: 'http://pv.sohu.com/cityjson?ie=utf-8', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/ip': '' },
    },
    '/addres': {
      target:
        'https://api.map.baidu.com/location/ip?ak=0zKlcYDzVIU19eZTRCGNk8XzYmvHIFGQ&coor=bd09ll', // 测试地址
      changeOrigin: true,
      pathRewrite: { '^/addres': '' },
    },
  },
};
