import React, { useEffect, useState } from 'react';
import '@/utils/flexible';


import Indicator from './components/Indicator'
import Work from './components/Work'
import Policy from './components/Policy'
import Evaluate from './components/Evaluate'


import styles from './index.less'
export default class BusinessEnvironment extends React.Component {
  constructor() {
    super()
    this.state = {
      activeContent: '1'
    }
  }
  render () {
    return <div className={styles.bg}>
      <div className={styles.header}>
        <div>营商环境驾驶舱</div>
      </div>
      <div className={styles.contentTitle}>
        <div onClick={() => this.businessIndicator('1')}><span>指标体系</span></div>
        <div onClick={() => this.businessIndicator('2')}><span>工作体系</span></div>
        <div onClick={() => this.businessIndicator('3')}><span>政策体系</span></div>
        <div onClick={() => this.businessIndicator('4')}><span>评价体系</span></div>
      </div>
      <div className={styles.content}>
        {
          this.state.activeContent == 1 ? <Indicator /> : null
        }
        {
          this.state.activeContent == 2 ? <Work /> : null
        }
        {
          this.state.activeContent == 3 ? <Policy /> : null
        }
        {
          this.state.activeContent == 4 ? <Evaluate /> : null
        }
      </div>
    </div>
  }
  businessIndicator (type) {
    this.setState({
      activeContent: type
    })
  }
}
