import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Popconfirm } from 'antd'

export default () => {
  return (
    //  onConfirm={() => this.resoultBtn('1')}
    <Popconfirm placement="topRight" title="确认通过？" okText="是" cancelText="否">
      <Button key="submit" type="primary" ghost style={{margin: '0 10px'}}>
        通过
      </Button>
    </Popconfirm>

  );
};
