import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const styles = {
  panel: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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

function ExpansionPanelGraph(props) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary className={props.classes.panel} expandIcon={<ExpandMoreIcon />}>
        <Typography>{props.chartName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="Panel">
        <div class="Center-Chart">
          <PieChart width={300} height={200}>
            <Pie data={props.data}
              dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#67c258" />
            <Tooltip />
            <Legend layout="vertical" verticalAlign="middle" align="left"/>

          </PieChart>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

ExpansionPanelGraph.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelGraph);
