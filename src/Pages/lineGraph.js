import ReactFrappeChart from 'react-frappe-charts';
import React from 'react';

const LineGraph = (props) => {
  if (
    props.summaryData !== undefined &&
    props.summaryData.total !== undefined
  ) {
    return (
      <ReactFrappeChart
        type="line"
        colors={['blue']}
        axisOptions={{ xAxisMode: 'tick', yAxisMode: 'tick', xIsSeries: 1 }}
        height={250}
        data={{
          labels: [
            'CONFIRMED CASES INDIAN',
            'CONFIRMED CASES FOREIGN',
            'DISCHARGED',
            'DEATHS',
          ],
          datasets: [
            {
              values: [
                props.summaryData.confirmedCasesIndian,
                props.summaryData.confirmedCasesForeign,
                props.summaryData.discharged,
                props.summaryData.deaths,
              ],
            },
          ],
        }}
      />
    );
  } else {
    return null;
  }
};

export default LineGraph;
