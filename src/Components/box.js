import React from 'react';
import Heading from './heading';
const Box = (props) => {
  return (
    <div
      style={{
        borderStyle: 'solid',
        borderColor: '#ebf4f5',
        borderWidth: '30px',

        paddingLeft: '10px',
        paddingRight: '10px',
      }}
      id="123"
    >
      <Heading heading={props.heading} />
      {props.center}
    </div>
  );
};

export default Box;
