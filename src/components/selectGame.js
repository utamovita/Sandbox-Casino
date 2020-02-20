import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";

function SelectGame() {
    return (
        <Container className="select-game">
            <h1>Dice casino</h1>
            <Link to="/high-low">
                <Button color="primary" variant="contained">
                    High/low
                </Button>
            </Link>
            <Link to="/number">
                <Button color="primary" variant="contained" disabled>
                    Number
                </Button>
            </Link>
            <Link to="/blackjack">
                <Button color="primary" variant="contained" disabled>
                    Blackjack
                </Button>
            </Link>
        </Container>
    );
}

export default SelectGame;
