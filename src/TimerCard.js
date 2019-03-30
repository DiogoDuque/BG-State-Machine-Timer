import React, { Component } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

export default class TimerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: '0',
      seconds: '00',
      intervalHandle: null,
    }

    this.secondsRemaining = 0;

    this.tick = this.tick.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.pauseCountDown = this.pauseCountDown.bind(this);
    this.resumeCountDown = this.resumeCountDown.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    this.startCountDown();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalHandle);
    this.setState({intervalHandle:null});
  }

  updateTimer() {
    clearInterval(this.state.intervalHandle);
    this.setState({intervalHandle:null});
    this.startCountDown();
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
      this.setState({
        value: "0" + min,
      })
    }
    if (min === 0 & sec === 0) {
      clearInterval(this.state.intervalHandle);
      this.setState({intervalHandle:null});
      this.refs.audio.play();
      //const snd = new Audio("clock.mp3");
      //snd.play();
    }
    this.secondsRemaining--;
  }

  startCountDown() {
    if(this.props.time === 0) {
      this.setState({minutes:'0', seconds:'00'})
    } else {
      this.setState({intervalHandle: setInterval(this.tick, 1000)});
      this.secondsRemaining = this.props.time;
    }
  }

  pauseCountDown() {
    if(this.props.time !== 0) {
      clearInterval(this.state.intervalHandle);
      this.setState({intervalHandle:null});
    }
  }

  resumeCountDown() {
    this.setState({intervalHandle: setInterval(this.tick, 1000)});
  }

  render() {
    const { classes, title, time } = this.props;
    const { minutes, seconds } = this.state;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
            <Typography variant="h3">
              {`${minutes}:${seconds}`}
            </Typography>
          </CardContent>
          <CardActions>
            {time !== 0 && [
              (this.state.intervalHandle != null ?
                <Button size="medium" color="primary" onClick={this.pauseCountDown}>Pause</Button> :
                <Button size="medium" color="primary" onClick={this.resumeCountDown}>Resume</Button>),
                <Button size="medium" color="primary" onClick={this.updateTimer}>Reset</Button>
              ]}
          </CardActions>
        </Card>
        <audio ref="audio" src="clock.mp3" preload="auto"></audio>
      </div>
    );
  }
}