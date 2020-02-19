import React from "react";
import { useSelector } from "react-redux";

const Statistics = () => {
    const counterBalance = useSelector(state => state.counter.balance);
    const counterGamesPlayed = useSelector(state => state.counter.gamesPlayed);
    const counterWin = useSelector(state => state.counter.win);
    const counterLose = useSelector(state => state.counter.lose);
    const counterStrikeWins = useSelector(state => state.counter.strike.maxWins);
    const counterStrikeLosses = useSelector(state => state.counter.strike.maxLosses);
    const counterNum1 = useSelector(state => state.counter.numbers.num1);
    const counterNum2 = useSelector(state => state.counter.numbers.num2);
    const counterNum3 = useSelector(state => state.counter.numbers.num3);
    const counterNum4 = useSelector(state => state.counter.numbers.num4);
    const counterNum5 = useSelector(state => state.counter.numbers.num5);
    const counterNum6 = useSelector(state => state.counter.numbers.num6);

    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Balance</td>
                        <td>{counterBalance}</td>
                    </tr>
                    <tr>
                        <td>Games played</td>
                        <td>{counterGamesPlayed}</td>
                    </tr>
                    <tr>
                        <td>Wins</td>
                        <td>{counterWin}</td>
                    </tr>
                    <tr>
                        <td>Losses</td>
                        <td>{counterLose}</td>
                    </tr>
                    <tr>
                        <td>Max win strike</td>
                        <td>{counterStrikeWins}</td>
                    </tr>
                    <tr>
                        <td>Max lose strike</td>
                        <td>{counterStrikeLosses}</td>
                    </tr>
                    <tr>
                        <td>Max bet amount</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>6's</td>
                        <td>{counterNum6}</td>
                    </tr>
                    <tr>
                        <td>5's</td>
                        <td>{counterNum5}</td>
                    </tr>
                    <tr>
                        <td>4's</td>
                        <td>{counterNum4}</td>
                    </tr>
                    <tr>
                        <td>3's</td>
                        <td>{counterNum3}</td>
                    </tr>
                    <tr>
                        <td>2's</td>
                        <td>{counterNum2}</td>
                    </tr>
                    <tr>
                        <td>1's</td>
                        <td>{counterNum1}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;
