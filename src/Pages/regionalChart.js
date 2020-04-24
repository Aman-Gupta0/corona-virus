import ReactFrappeChart from 'react-frappe-charts';
import React from 'react';

const Graph = (props) => {
  if (props.check) {
    var a = Object.values(props.regionalData);

    var statesName = a.map((val, i) => {
      return val.loc;
    });

    var numberDeath = a.map((val, i) => {
      return val.deaths;
    });

    var numberConfirmedCasesIndian = a.map((val, i) => {
      return val.confirmedCasesIndian;
    });
    var numberConfirmedCasesForeign = a.map((val, i) => {
      return val.confirmedCasesForeign;
    });

    var numberDischarged = a.map((val, i) => {
      return val.discharged;
    });
    return (
      <ReactFrappeChart
        type="bar"
        colors={['blue', 'red', 'yellow', 'orange']}
        axisOptions={{ xAxisMode: 'tick', yAxisMode: 'tick', xIsSeries: 1 }}
        height={350}
        data={{
          labels: statesName,

          datasets: [
            {
              name: 'Confirmed Cases Indian',
              values: numberConfirmedCasesIndian,
            },
            { name: 'Deaths', values: numberDeath },

            { name: 'Discharged', values: numberDischarged },
            {
              name: 'Confirmed Cases Foreign',
              values: numberConfirmedCasesForeign,
            },
          ],

    
        }}
        tooltipOptions={{
          formatTooltipX: (d) => (d + '').toUpperCase(),
          formatTooltipY: (d) => d + ' people',
        }}
      />
    );
  } else {
    return null;
  }
};

export default Graph;
