import React from 'react';

const statistics = (props) => {
    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <table>          
                <tbody>
                <tr>
                    <td>Balance</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Games played</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Games played</td>
                    <td>{props.played}</td>
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

export default statistics;