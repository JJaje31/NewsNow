import React from 'react';
import { Button, Result } from 'antd';

const PageError = () => {

  const locationNav = () => {
    window.location.href = '/'
  }
  return (
    <Result
      style={{ width: '100vw', height: '100vh' }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={locationNav} type="primary">Back Home</Button>}
    />
  );
}
export default PageError;