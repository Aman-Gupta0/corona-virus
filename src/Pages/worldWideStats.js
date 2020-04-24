import React from 'react';
import Heading from '../Components/heading';
import HeaderCard from '../Components/headerCard';

const WorldStats = (props) => {
  return (
    <div className="divider">
      <Heading heading=" WorldWide Corona Virus" />

      <div className="grid-container">
        {props.check &&
          Object.entries(props.coronaStats).map((val) => {
            return (
              <div className="grid-item">
                <HeaderCard key={val[0]} heading={val[1]} text={val[0]} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WorldStats;
