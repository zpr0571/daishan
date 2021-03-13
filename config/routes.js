export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/visualization',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                path: '/work-bench',
                name: 'work-bench',
                icon: 'BankOutlined',
                component: './WorkBench/index',
              },
              {
                path: '/antv-page',
                name: 'antv-page',
                icon: 'BankOutlined',
                component: './AntvPage/index',
              },
              {
                path: '/visualization',
                name: 'visualization',
                icon: 'BankOutlined',
                component: './Visualization/index',
              },
              {
                path: '/enterpriseimage',
                name: 'EnterpriseImage',
                icon: 'BankOutlined',
                component: './EnterpriseImage/index',
              },
              {
                path: '/progressofwork',
                name: 'ProgressOfWork',
                icon: 'BankOutlined',
                component: './ProgressOfWork/index',
              },
              {
                path: '/process-module',
                // name: 'process-module',
                icon: 'BankOutlined',
                component: './ProcessModule/index',
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './ListTableList',
              },
              // 营商环境
              {
                path: '/business-environment',
                name: 'business-environment',
                icon: 'BankOutlined',
                component: './BusinessEnvironment/index',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
