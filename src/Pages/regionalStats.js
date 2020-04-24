import React from 'react';
import Card from '../Components/card';
import Heading from '../Components/heading';

const RegionalStats = (props) => {
  return (
    <div className="divider">
      <Heading heading="Regional Corona Virus" />
      <div className="grid-container">
        {props.check &&
          props.regional.map((val, i) => {
            return (
              <div className="grid-item">
                <Card
                  key={val.loc}
                  loc={val.loc}
                  confirmedCasesIndian={val.confirmedCasesIndian}
                  confirmedCasesForeign={val.confirmedCasesForeign}
                  discharged={val.discharged}
                  deaths={val.deaths}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RegionalStats;
