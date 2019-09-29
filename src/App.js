import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from "./logo.svg";

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
                        Say who is the beauty?
                        <input type="text" onChange={this.handleChange}/>
                        <button onClick={() => {
                            if (this.state.value === "Hagar" || this.state.value === "hagar") {
                                alert("Correct!");
                            } else {
                                alert("Are u alive?");
                            }
                        }}></button>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
