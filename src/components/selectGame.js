import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';

function SelectGame() {
  return (
    <Container className="select-game">
      <h1>Test your luck</h1>
      <Link to="/high-low">
        <Button color="primary" variant="contained">Win/low</Button>
      </Link>
      <Link to="/one-armed-bandit">
        <Button color="primary" variant="contained">One armed bandit</Button>
      </Link>
      <Link to="/blackjack">
        <Button color="primary" variant="contained">Blackjack</Button>
      </Link>
    </Container>
  );
}

export default SelectGame;
