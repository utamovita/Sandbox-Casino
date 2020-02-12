import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Blackjack from './components/game/blackjack/index';
import HighLow from './components/game/high-low/index';
import Number from './components/game/number/index';
import './main.scss';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/high-low" component={HighLow} />
            <Route path="/blackjack" component={Blackjack} />
            <Route path="/number" component={Number} />
        </Switch>
    </Router>
), document.querySelector('#root'));