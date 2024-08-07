import React, { Component } from 'react';
import MyCard from './MyCard';
import State from './State';

export default class GoTStateMachine extends Component {
  constructor() {
    super();

    //WESTEROS PHASE
    const bank_shift = new State('Shift Loans');
    const bank_interest = new State('Pay Interest', 30);
    const west_cards = new State('Reveal Westeros cards');
    //PLANNING PHASE
    const plan_vassals = new State('Choose Vassals');
    const plan_assign = new State('Assign Orders',360);
    const plan_reveal = new State('Reveal Orders');
    const plan_raven = new State('Use Messenger Raven', 45);
    //ACTION PHASE
    const act_raid = new State('Raid Orders',30);
    const act_march = new State('March Orders',30);
    const act_consolidate = new State('Consolidate Power Orders');
    //ACTION PHASE - BATTLE
    const bat_support = new State('Battle: Call support',20);
    const bat_calc = new State('Battle: Say initial strengths');
    const bat_cards = new State('Battle: House cards',90);
    const bat_blade = new State('Battle: Valyrian Steel Blade');
    const bat_finish = new State('Battle: Resolution');
    //EVENTS
    const supply = new State('Supply');
    const mustering = new State('Mustering (per castle)',45);
    const clash = new State('Clash of Kings (per track)',30);
    const wildlings = new State('Wildlings Attack',45);


    //WESTEROS PHASE
    bank_shift.addNextState(bank_interest);
    bank_interest.addNextState(bank_interest);
    bank_interest.addNextState(west_cards);
    west_cards.addNextState(plan_vassals);
    west_cards.addNextState(supply);
    west_cards.addNextState(mustering);
    west_cards.addNextState(clash);
    west_cards.addNextState(wildlings);
    //PLANNING PHASE
    plan_vassals.addNextState(plan_assign);
    plan_assign.addNextState(plan_reveal);
    plan_reveal.addNextState(plan_raven);
    plan_raven.addNextState(act_raid);
    //ACTION PHASE
    act_raid.addNextState(act_march);
    act_march.addNextState(bat_support);
    act_march.addNextState(act_consolidate);
    act_consolidate.addNextState(bank_shift);
    act_consolidate.addNextState(mustering);
    //ACTION PHASE - BATTLE
    bat_support.addNextState(bat_calc);
    bat_calc.addNextState(bat_cards);
    bat_cards.addNextState(bat_blade);
    bat_cards.addNextState(bat_finish);
    bat_blade.addNextState(bat_finish);
    bat_finish.addNextState(act_march);

    this.state={
      currentState: plan_assign,
      currentRound: 1,
    };

    this.changeState = this.changeState.bind(this);
  }

  changeState(state) {
    if(this.state.currentState.name === 'Consolidate Power Orders' && state.name === 'Shift Loans')
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
