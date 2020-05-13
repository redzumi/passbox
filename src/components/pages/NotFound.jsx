import React from 'react';
import styled from 'styled-components';
import PageContainer from '../atoms/PageContainer';

const NotFound = () => (
  <PageContainer>
    <ContentContainer>Not Found</ContentContainer>
  </PageContainer>
);

const ContentContainer = styled.div`
  padding: 100px;
  border-radius: 10px;
  background: hsl(0, 0%, 100%);
  border-top: 5px solid #646beb;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

export default NotFound;
