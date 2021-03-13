const workrouters = [
  {
    path: '/client-manage/consumer-client/create',
    name: '新建客户',
    btnState: 'create',
    imgIndex: 0,
  },
  {
    path: '/process',
    name: '新增贷款',
    btnState: 'process',
    imgIndex: 1,
  },
  {
    path: '/work-banch/borrow-money',
    name: '发起用信',
    btnState: 'borrowMoney',
    imgIndex: 2,
  },
  {
    path: '/after-loan/repay-ment-record',
    name: '还款记录',
    btnState: 'repayMentRecord',
    imgIndex: 3,
  },
  {
    path: '/work-banch/repay-ment',
    name: '提前还款',
    btnState: 'repayMent',
    imgIndex: 4,
  },
  {
    path: '/work-banch/exhibition-period',
    name: '发起展期',
    btnState: 'exhibitionPeriod',
    imgIndex: 5,
  },
  {
    path: '/work-banch/modify-consumer-info',
    name: '变更客户信息',
    btnState: 'modifyConsumerInfo',
    imgIndex: 6,
  },
  {
    path: '/work-banch/modify-loan-information',
    name: '变更贷款信息',
    btnState: 'modifyLoan',
    imgIndex: 7,
  },
  {
    path: '/work-banch/loan-transfer',
    name: '贷款移交',
    btnState: 'loanTransfer',
    imgIndex: 8,
  },
  {
    path: '/work-banch/credit-inquiry',
    name: '授信额度管理',
    btnState: 'creditInquiry',
    imgIndex: 9,
  },
  {
    path: '/work-banch/rolling-plan',
    name: '新建转贷方案',
    btnState: 'rollingPlan',
    imgIndex: 10,
  },
  {
    path: '/work-banch/classify-check',
    name: '变更五级分类',
    btnState: 'classifyCheck',
    imgIndex: 11,
  },
  {
    path: '/after-loan/add-post-loan-warning',
    name: '新建贷后预警',
    btnState: 'postLoanWarning',
    imgIndex: 12,
  },
  {
    path: '/work-banch/loan-relief',
    name: '贷款减免',
    btnState: 'loanRelief',
    imgIndex: 13,
  }
];

export default { workrouters }
