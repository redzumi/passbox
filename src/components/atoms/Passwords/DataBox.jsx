import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const DataBox = ({ data }) => (
  <div className="col-xs-6 col-xs-12">
    <Box color={data.color}>
      <Icon url={data.icon} />
      <div>
        <Name>{data.name}</Name>
        <Link href={data.url}>{data.url}</Link>
      </div>
    </Box>
  </div>
);

DataBox.propTypes = {
  data: PropTypes.object.isRequired //eslint-disable-line
};

const Box = styled.div`
  border-left: 10px solid ${(props) => props.color};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-image: url(${(props) => props.url});
  background-size: 40px 40px;
  opacity: 0.8;
  border-radius: 50%;
`;

const Name = styled.div`
  color: #53504f;
`;

const Link = styled.a`
  text-decoration: none;
  color: #c3c6c7;
  font-size: 14px;
  transition: all 0.25s;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #c3c6c7;
  }
`;

export default DataBox;
