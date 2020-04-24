import ReactFrappeChart from 'react-frappe-charts';
import React from 'react';

const Pie = (props) => {
  if (props.check) {
    return (
      <ReactFrappeChart
        type="pie"
        colors={['#21ba45']}
        axisOptions={{ xAxisMode: 'tick', yAxisMode: 'tick', xIsSeries: 1 }}
        height={250}
        width={250}
        data={{
          labels: ['Indian Cases', 'Foreign Cases'],
          datasets: [
            {
              values: [
                props.stats.confirmedCasesIndian,
                props.stats.confirmedCasesForeign,
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

export default Pie;
