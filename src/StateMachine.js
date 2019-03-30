import React, { Component } from 'react';
import MyCard from './MyCard';

function State(name, time=0) {
  this.name = name;
  this.time = time;
  this.nextStates = [];

  this.getNextStateNames = () => {
    const names = [];
    this.nextStates.forEach(s => {
      names.push(s.name);
    })
    return names;
  };

  this.addNextState = (state) => {
    this.nextStates.push(state);
  };
}

export default class StateMachine extends Component {
  constructor() {
    super();
    const west_cards = new State('Advance round and reveal cards');
    const plan_assign = new State('Assign Orders',3);//180);
    const plan_reveal = new State('Reveal Orders');
    const plan_raven = new State('Use Messenger Raven', 45);
    const act_raid = new State('Start Action Phase: Use Raid Orders',30);
    const act_march = new State('Use March Orders',30);
    const bat_support = new State('Battle: Call for support',20);
    const bat_cards = new State('Battle: Use house cards',90);
    const bat_blade = new State('Use Valyrian Steel Blade');
    const bat_finish = new State('Casualties and Retreat');
    const act_consolidate = new State('Use Consolidate Power Orders');

    west_cards.addNextState(plan_assign);
    plan_assign.addNextState(plan_reveal);
    plan_reveal.addNextState(plan_raven);
    plan_raven.addNextState(act_raid);
    act_raid.addNextState(act_march);
    act_march.addNextState(bat_support);
    bat_support.addNextState(bat_cards);
    act_march.addNextState(act_consolidate);
    bat_cards.addNextState(bat_blade);
    bat_cards.addNextState(bat_finish);
    bat_blade.addNextState(bat_finish);
    bat_finish.addNextState(act_march);
    act_consolidate.addNextState(west_cards);

    this.state={
      currentState: plan_assign,
    };

    this.changeState = this.changeState.bind(this);
  }

  changeState(state) {
    this.setState({
      currentState: state,
    });
  }

  render() {
    const state = this.state.currentState;
    return <MyCard state={state} changeState={this.changeState} />;
  }
};
