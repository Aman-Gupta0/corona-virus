import React from 'react';
import { Typography, Card } from 'antd';
import mapping from './map';
const { Text } = Typography;

const HeaderCard = (props) => {
  console.log(mapping);
  return (
    <Card size={'small'} bordered={true}>
      <Text strong={true}>{props.heading}</Text>
      <br />
      <br />
      {mapping[props.text] && (
        <Text>{(mapping[props.text] + '').toUpperCase()}</Text>
      )}
      {!mapping[props.text] && <Text>{props.text.toUpperCase()}</Text>}
    </Card>
  );
};
export default HeaderCard;
