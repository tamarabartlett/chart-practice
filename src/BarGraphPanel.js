import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './css/App.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const styles = {
  panel: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #DD3B76, #f28b4e)',
    // borderRadius: 3,
    // border: 0,
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    // boxShadow: '0px 3px 15px #222',
  },
};


class BarGraphPanel extends Component {
  constructor() {
    super();
    this.derp = this.derp.bind(this, 'Derpalerp');
  }

  derp = (param, e) => {
    console.log('Parameter', param);
    console.log('Event', e['name']);

    let monthName = e['name']
    //mggonaa have to set state
  }

  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary className={this.props.classes.panel} expandIcon={<ExpandMoreIcon />}>
          <Typography>{this.props.chartName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="Panel">
          <BarChart
            width={200}
            height={300}
            data={this.props.data}
            margin={{top: 5, right: 5, left: 5, bottom: 5}}>
             <XAxis dataKey="name"/>
             <YAxis/>
             <Tooltip/>
             <Legend />
             <Bar
               dataKey="value"
               onClick={this.derp}
               fill="#00bfff" />
          </BarChart>

        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}


BarGraphPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarGraphPanel);
