import React from 'react'
import { Container, Button } from '@material-ui/core';

function SelectGame() {
  return (
    <Container className="select-game">
      <h1>Test your luck</h1>
      <Button color="primary" variant="contained">Win/low</Button>
      <Button color="primary" variant="contained">One armed bandit</Button>
      <Button color="primary" variant="contained">Blackjack</Button>
    </Container>
  );
}

export default SelectGame;
