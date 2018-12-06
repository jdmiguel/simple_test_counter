import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
          count: 0
        }
    }

    onIncrementHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className="counter">
                <p>The count is: {this.state.count}</p>
                <button onClick={this.onIncrementHandler}>INCREMENT COUNTER</button>
            </div>
        )
  }
}

export default Counter;
