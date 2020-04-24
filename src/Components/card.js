import React, { Fragment } from 'react';
import { Typography, Card } from 'antd';
const { Text } = Typography;

const CardRegional = (props) => {
  return (
    <Fragment>
      <Card style={{ paddingBottom: '10px' }}>
        <Text underline={true} strong={true}>
          {props.loc}
        </Text>
      </Card>
      <Card>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            textAlign: 'Left',
          }}
        >
          <div> Confirmed Cases Indian </div>
          <div> {props.confirmedCasesIndian} </div>
          <div>Confirmed Cases Foreign</div>
          <div> {props.confirmedCasesForeign}</div>
          <div>Discharged</div>
          <div> {props.discharged}</div>
          <div>Deaths </div>
          <div> {props.deaths}</div>
        </div>
      </Card>
    </Fragment>
  );
};
export default CardRegional;
