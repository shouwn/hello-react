import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        number2: 0
    }

    handleIncrease = () => {
        this.setState(
            ({ number }) => ({
                number: number + 1
            })
        )
    }

    handleDecrease = () => {
        this.setState(
            ({ number, number2 }) => ({
                number2: number2 - 1
            })
        )
    }

    render(){
        return (
            <div>
                <h1>카운터</h1>
                <div>값: { this.state.number }</div>
                <div>값: { this.state.number2 }</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;