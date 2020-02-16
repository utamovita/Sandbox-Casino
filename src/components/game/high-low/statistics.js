import React from 'react';
import { useSelector } from 'react-redux';

function Statistics() {
    const gamesPlayed = useSelector(state => state.counter.gamesPlayed);
    const balance = useSelector(state => state.counter.balance);
    const winStreak = useSelector(state => state.counter.streak.wins);
    const loseStreak = useSelector(state => state.counter.streak.loses);

    const num1 = useSelector(state => state.counter.numberCounter.num1);
    const num2 = useSelector(state => state.counter.numberCounter.num2);
    const num3 = useSelector(state => state.counter.numberCounter.num3);
    const num4 = useSelector(state => state.counter.numberCounter.num4);
    const num5 = useSelector(state => state.counter.numberCounter.num5);
    const num6 = useSelector(state => state.counter.numberCounter.num6);


    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Balance</td>
                        <td>{balance}</td>
                    </tr>
                    <tr>
                        <td>Games played</td>
                        <td>{gamesPlayed}</td>
                    </tr>
                    <tr>
                        <td>Max win strike</td>
                        <td>{winStreak}</td>
                    </tr>
                    <tr>
                        <td>Max lose strike</td>
                        <td>{loseStreak}</td>
                    </tr>
                    <tr>
                        <td>Max bet amount</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>6's</td>
                        <td>{num6}</td>
                    </tr>
                    <tr>
                        <td>5's</td>
                        <td>{num5}</td>
                    </tr>
                    <tr>
                        <td>4's</td>
                        <td>{num4}</td>
                    </tr>
                    <tr>
                        <td>3's</td>
                        <td>{num3}</td>
                    </tr>
                    <tr>
                        <td>2's</td>
                        <td>{num2}</td>
                    </tr>
                    <tr>
                        <td>1's</td>
                        <td>{num1}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Statistics;