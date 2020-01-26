import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Return = () => {
    return (
        <Link to="/">
            <Button color="primary" variant="contained">Return</Button>
        </Link>
    );
}

export default Return;