import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const data = [
      {name: 'Jan', jumps: 6, amt: 2400},
      {name: 'Feb', jumps: 10, amt: 2210},
      {name: 'March', jumps: 1, amt: 2290},
      {name: 'April', jumps: 20, amt: 2000},
      {name: 'May', jumps: 9, amt: 2181},
      {name: 'June', jumps: 0, amt: 2500},
      {name: 'July', jumps: 0, amt: 2100},
];

const ExpansionPanelGraph = (props) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{props.chartName}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <BarChart width={411} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="jumps" fill="#8884d8" />
      </BarChart>

    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default ExpansionPanelGraph;
