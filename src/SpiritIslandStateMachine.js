import React, { Component } from 'react';
import MyCard from './MyCard';
import State from './State';

export default class GoTStateMachine extends Component {
  constructor() {
    super();

    //SPIRIT PHASE
    const spiritPhase = new State('Spirit Phase (Growth, Energy & Choose Powers)', 360);
    //FAST POWER PHASE
    const fastPowerPhase = new State('Fast Power Phase');
    const playFastPower = new State('Play Fast Power', 30);
    //INVADER PHASE
    const invaderPhase = new State('Invader Phase');
    const blightedIslandEffect = new State('Blighted Island Effect', 30);
    const fearEffect = new State('Fear Effect', 60);
    const ravage = new State('Ravage', 90);
    const build = new State('Build', 90);
    const explore = new State('Build', 90);
    const advCards = new State('Advance Invader Cards');
    //SLOW POWER PHASE
    const slowPowerPhase = new State('Slow Power Phase');
    const playSlowPower = new State('Play Slow Power', 60);
    //TIME PASSES
    const timePasses = new State('Time Passes');
    const discardFearCards = new State('Discard Fear Cards');


    //SPIRIT PHASE
    spiritPhase.addNextState(fastPowerPhase);
    //FAST POWER PHASE
    fastPowerPhase.addNextState(playFastPower);
    fastPowerPhase.addNextState(invaderPhase);
    playFastPower.addNextState(fastPowerPhase);
    //INVADER PHASE
    invaderPhase.addNextState(blightedIslandEffect);
    blightedIslandEffect.addNextState(fearEffect);
    fearEffect.addNextState(fearEffect);
    fearEffect.addNextState(ravage);
    ravage.addNextState(build);
    build.addNextState(explore);
    explore.addNextState(advCards);
    advCards.addNextState(slowPowerPhase);
    //SLOW POWER PHASE
    slowPowerPhase.addNextState(playSlowPower);
    slowPowerPhase.addNextState(timePasses);
    playSlowPower.addNextState(slowPowerPhase);
    //TIME PASSES
    timePasses.addNextState(spiritPhase);
    timePasses.addNextState(discardFearCards);
    discardFearCards.addNextState(timePasses);

    this.state={
      currentState: spiritPhase,
      currentRound: 1,
    };

    this.changeState = this.changeState.bind(this);
  }

  changeState(state) {
    if(this.state.currentState.name === 'Time Passes' && state.name === 'Spirit Phase (Growth, Energy & Choose Powers)')
      this.setState({currentRound: this.state.currentRound+1});
    if(state.nextStates.length === 0)
    {
      const modState = new State(state.name, state.time);
      modState.addNextState(this.state.currentState);
      modState.addNextState(modState);
      this.setState({
        currentState: modState,
      });
    }
    else this.setState({
      currentState: state,
    });
  }

  render() {
    const { currentState, currentRound } = this.state;
    return <MyCard round={currentRound} state={currentState} changeState={this.changeState} />;
  }
};
