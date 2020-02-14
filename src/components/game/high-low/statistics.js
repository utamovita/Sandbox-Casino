import React from 'react';
import { useSelector } from 'react-redux';

function Statistics () {
    const counter = useSelector(state => state.counter);

    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <table>          
                <tbody>
                <tr>
                    <td>Balance</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Games played</td>
                    <td>{counter.gamesPlayed}</td>
                </tr>
                <tr>
                    <td>Max win strike</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Max lose strike</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Max bet amount</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>6's</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>5's</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>4's</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3's</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>2's</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>1's</td>
                    <td>0</td>
                </tr>
                </tbody>    
            </table>
        </div>
    );
}

export default Statistics;