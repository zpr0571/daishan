import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useIntl, FormattedMessage } from 'umi';

import Business from './components/Business/index'

export default () => {
  const intl = useIntl();
  return (
    <PageContainer>
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard gutter={16} ghost >
          <ProCard colSpan={16} headerBordered title="业务办理" >
            <Business />
          </ProCard>
          <ProCard colSpan={8} />
        </ProCard>
        <ProCard gutter={16} ghost style={{ minHeight: 200 }}>
          <ProCard colSpan={16} ghost gutter={16}>
            <ProCard colSpan={12} />
            <ProCard colSpan={12} />
          </ProCard>
          <ProCard colSpan={8} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
