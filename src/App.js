import React, { Component } from 'react';
import './App.css';
import Jumps from './jumps.js';
import { ReadJumpsJson } from './readJumps';
import LastJump from './LastJump.js';
import ExpansionPanelGraph from './GraphExpansionPanel.js';
import PieChartPanel from './PieChartPanel.js';



const getJumpType = () => {
  return ReadJumpsJson(Jumps, "type")
};

const getJumpLocation = () => {
  return ReadJumpsJson(Jumps, "location")
};

const getLastJump = () => {
  return Jumps[Jumps.length - 1]
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skydiving Logbook</h1>
        </header>

        <LastJump jump={getLastJump()}/>

        <ExpansionPanelGraph chartName="Jump #s by Month"/>
        <PieChartPanel data={getJumpType()} chartName="Jumps By Type"/>
        <PieChartPanel data={getJumpLocation()} chartName="Jumps By Location"/>
      </div>
    );
  }
}

export default App;
/* <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/> */
