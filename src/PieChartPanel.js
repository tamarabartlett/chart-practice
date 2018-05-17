import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PieChart, Pie, Tooltip } from 'recharts';

const styles = theme => ({
  chart: {
    width: '30px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});


function ExpansionPanelGraph(props) {
  const { classes } = props;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{props.chartName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <PieChart width={100} height={100}>
          <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#E76535" />
          <Tooltip />
        </PieChart>

      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

ExpansionPanelGraph.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelGraph);
