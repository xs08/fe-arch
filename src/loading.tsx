import React from 'react';
import { Spin } from 'antd';

const GlobalLoading: React.FC = () => {
  return (
    <div className="App__Global--loading">
      <Spin size="large" />
    </div>
  );
};

export default GlobalLoading;
