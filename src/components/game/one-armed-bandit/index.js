import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
            This game is currently unavaiable, please come back later.
            <Link to="/">
                <button>back to games</button>
            </Link>
        </div>
    );
};

export default index;