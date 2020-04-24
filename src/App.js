import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './styles.css';
import WorldWideGraph from './Pages/lineGraph';
import RegionalStats from './Pages/regionalStats';
import WorldWide from './Pages/worldWideStats';
import RegionalChart from './Pages/regionalChart';
import Pie from './Pages/pieDistribution';
import Box from './Components/box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coronaStats: [],
    };
  }
  componentDidMount = () => {
    const URL = 'https://api.rootnet.in/covid19-in/stats/latest';
    axios
      .get(URL)
      .then((response) => {
        if (response.data.success) {
          // console.log("success", response);
          this.setState({
            coronaStats: response.data.data,
          });
        } else {
          this.setState({
            coronaStats: [],
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    let check = this.state.coronaStats.summary !== undefined ? true : false;

    return (
      <Fragment>
        <WorldWide coronaStats={this.state.coronaStats.summary} check={check} />

        <Box
          heading="Graphical Representation of WorldWide Corona Virus"
          center={
            <WorldWideGraph summaryData={this.state.coronaStats.summary} />
          }
        />
        <Box
          heading="Indian Case vs Foreign Case"
          center={<Pie stats={this.state.coronaStats.summary} check={check} />}
        />

        <RegionalStats
          regional={this.state.coronaStats.regional}
          check={check}
        />
        <Box
          heading=" Graphical Representation of Regional Corona Virus "
          center={
            <RegionalChart
              regionalData={this.state.coronaStats.regional}
              check={check}
            />
          }
        />
      </Fragment>
    );
  }
}
export default App;
