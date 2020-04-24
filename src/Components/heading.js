import React from 'react';
import { Typography } from 'antd';

const Heading = (props) => {
  return (
    <Typography.Title
      underline={true}
      level={2}
      style={{ textAlign: 'center' }}
    >
      {props.heading}
    </Typography.Title>
  );
};

export default Heading;
