import React from 'react';
import { useSelector } from 'react-redux';

function Statistics() {
    const gamesPlayed = useSelector(state => state.counter.gamesPlayed);
    const balance = useSelector(state => state.counter.balance);
    const wins = useSelector(state => state.counter.wins);
    const loses = useSelector(state => state.counter.loses);

    const maxWinStreak = useSelector(state => state.counter.streak.maxWins);
    const maxLoseStreak = useSelector(state => state.counter.streak.maxLoses);

    const num1 = useSelector(state => state.counter.numberCounter.num1);
    const num2 = useSelector(state => state.counter.numberCounter.num2);
    const num3 = useSelector(state => state.counter.numberCounter.num3);
    const num4 = useSelector(state => state.counter.numberCounter.num4);
    const num5 = useSelector(state => state.counter.numberCounter.num5);
    const num6 = useSelector(state => state.counter.numberCounter.num6);

    let winPercent = wins / gamesPlayed * 100;
    let losePercent = loses / gamesPlayed * 100;
    let num1Percent = num1 / gamesPlayed * 100;
    let num2Percent = num2 / gamesPlayed * 100;
    let num3Percent = num3 / gamesPlayed * 100;
    let num4Percent = num4 / gamesPlayed * 100;
    let num5Percent = num5 / gamesPlayed * 100;
    let num6Percent = num6 / gamesPlayed * 100;

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
                        <td>Wins</td>
                        <td>{wins} ({winPercent.toFixed(1)}%)</td>
                    </tr>
                    <tr>
                        <td>Loses</td>
                        <td>{loses} ({losePercent.toFixed(1)}%)</td>
                    </tr>
                    <tr>
                        <td>Max win strike</td>
                        <td>{maxWinStreak}</td>
                    </tr>
                    <tr>
                        <td>Max lose strike</td>
                        <td>{maxLoseStreak}</td>
                    </tr>
                    <tr>
                        <td>Max bet amount</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>6's</td>
                        <td>{num6} ({num6Percent.toFixed(1)}%)</td>
                    </tr>
                    <tr>
                        <td>5's</td>
                        <td>{num5} ({num5Percent.toFixed(1)}%)</td>
                    </tr>
                    <tr>
                        <td>4's</td>
                        <td>{num4} ({num4Percent.toFixed(1)}%)</td>
                    </tr>
                    <tr>
                        <td>3's</td>
                        <td>{num3} ({num3Percent.toFixed(1)}%)</td>
                    </tr>
                    <tr>
                        <td>2's</td>
                        <td>{num2} ({num2Percent.toFixed(1)}%)</td>
                    </tr>
                    <tr>
                        <td>1's</td>
                        <td>{num1} ({num1Percent.toFixed(1)}%)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Statistics;