import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from "./logo.svg";

import './App.css';

class App extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {value: ''};

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({value: value});
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Say who is the beauty?<br/>
                        <input type="text" onChange={this.handleChange}/><br/>
                        <button onClick={() => {
                            if (this.state.value === "Hagar" || this.state.value === "hagar") {
                                alert("Correct!");
                            } else {
                                alert("Are u alive?");
                            }
                        }}>Check</button>
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
