import React from 'react';

class statistics extends React.Component {

    render() {

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
                        <td>{this.props.played[0].id}</td>
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
                        <td>{this.props.rolled.six}</td>
                    </tr>
                    <tr>
                        <td>5's</td>
                        <td>{this.props.rolled.five}</td>
                    </tr>
                    <tr>
                        <td>4's</td>
                        <td>{this.props.rolled.four}</td>
                    </tr>
                    <tr>
                        <td>3's</td>
                        <td>{this.props.rolled.three}</td>
                    </tr>
                    <tr>
                        <td>2's</td>
                        <td>{this.props.rolled.two}</td>
                    </tr>
                    <tr>
                        <td>1's</td>
                        <td>{this.props.rolled.one}</td>
                    </tr>
                    </tbody>    
                </table>
            </div>
        )
    }
}

export default statistics;