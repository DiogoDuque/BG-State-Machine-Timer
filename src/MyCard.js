import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Divider, Chip } from '@material-ui/core';
import TimerCard from './TimerCard';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class MyCard extends Component {
  componentDidUpdate() {
    this.refs.timercard.updateTimer();
  }

  render() {
    const { classes, state, changeState, round } = this.props;
    const { name, time } = state;
    return(
      <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Round: {round}
          </Typography>
        </CardContent>
      </Card>
      <Divider/>
      <TimerCard classes={classes} time={time} title={name} ref="timercard" />
      <Divider/>
      <Card>
        <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5">
            Next Actions
          </Typography>
        </CardContent>
        <CardActions style={{display: 'flex',flexWrap: 'wrap'}}>
          {state.nextStates.map((s,i) => <Chip key={i} style={{marginBottom: 10}} clickable label={s.name} className={classes.chip} onClick={() => changeState(s)} />)}
        </CardActions>
      </Card>
    </div>
    );
  }
};

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCard);