import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import GoTStateMachine from './GoTStateMachine';
import SpiritIslandStateMachine from './SpiritIslandStateMachine';

const allStateMachines = {
  'GoT - Board Game': <GoTStateMachine />,
  'Spirit Island': <SpiritIslandStateMachine />,
};

const App = () => {
  const [chosenStateMachine, setChosenStateMachine] = useState();
  return (
    <div>
      {!chosenStateMachine
        ? (<MenuList>
            {Object.entries(allStateMachines).map(e => <MenuItem key={e[0]} onClick={() => setChosenStateMachine(e[1])}>{e[0]}</MenuItem>)}
          </MenuList>)
        : chosenStateMachine
      }
    </div>
  );
}


export default App;
