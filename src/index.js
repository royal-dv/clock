/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ReactDOM from "react-dom";
import Clock_KRSK from "./clock";
import {Clock_MSK} from "./clock";
import "./styles.scss";
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
        render () {
        return(
            <div className = 'App'>
                <div className = "Clock_KRSK"><Clock_KRSK/></div>
                <div className = "Clock_MSK"><Clock_MSK/></div>
            </div>
        );
        }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();
