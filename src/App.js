import React, { Component } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import './App.css';
import Jumps from './jumps.js';
import { ReadJumpsJson } from './readJumps';
import LastJump from './LastJump.js';

const getJumpType = () => {
  return ReadJumpsJson(Jumps, "type")
};

const getJumpLocation = () => {
  return ReadJumpsJson(Jumps, "location")
};

const getLastJump = () => {
  return Jumps[Jumps.length - 1]
  // return Jumps[Jumps.length - 1]
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skydiving Logbook</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LastJump jump={getLastJump()}/>

        <PieChart className="myPieChart" width={400} height={250}>
          <Pie data={getJumpType()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#E76535" />
          <Tooltip />
        </PieChart>

        <PieChart className="myPieChart" width={400} height={100}>
          <Pie data={getJumpLocation()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#E76535" />
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

export default App;
/* <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/> */
