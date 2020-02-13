/* eslint-disable react/jsx-pascal-case */
import * as React from "react";

export default class Clock_KRSK extends React.Component {
  //clockInterval = "";
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.setHours = this.setHours.bind(this);
    this.state = {
      diff: "",
      title: "Красноярск",
      datediff: 7,
      hours: "",
      minutes: "",
      seconds: ""
    };
  }

  setHours(hours, title) {
    hours = parseInt(hours);
    this.setState({diff: hours, title: title});
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }
// Отрисовка штрихов и стрелок
  render() {
    const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`
    };

    const strokesStyle_12 = {
      transform: 'rotate(360deg)'
    };
    const strokesStyle_9 = {
      transform: 'rotate(270deg)'
    };
    const strokesStyle_6 = {
      transform: 'rotate(180deg)'
    };
    const strokesStyle_3 = {
      transform: 'rotate(90deg)'
    };
    const strokesStyle_1 = {
      transform: 'rotate(30deg)'
    };
    const strokesStyle_2 = {
      transform: 'rotate(60deg)'
    };
    const strokesStyle_4 = {
      transform: 'rotate(120deg)'
    };
    const strokesStyle_5 = {
      transform: 'rotate(150deg)'
    };
    const strokesStyle_7 = {
      transform: 'rotate(210deg)'
    };
    const strokesStyle_8 = {
      transform: 'rotate(240deg)'
    };
    const strokesStyle_10 = {
      transform: 'rotate(300deg)'
    };
    const strokesStyle_11 = {
      transform: 'rotate(330deg)'
    };


    const { title } = this.state;
    return (
      <div className={"clock"}>
        <h3>{title}</h3>
        <div className={"analog-clock"}>
          <div className={"dial seconds"} style={secondsStyle} />
          <div className={"dial minutes"} style={minutesStyle} />
          <div className={"dial hours"} style={hoursStyle} />
          <div className={"dial strokes12"} style={strokesStyle_12} />
          <div className={"dial strokes9"} style={strokesStyle_9} />
          <div className={"dial strokes6"} style={strokesStyle_6} />
          <div className={"dial strokes3"} style={strokesStyle_3} />
          <div className={"dial strokes1"} style={strokesStyle_1} />
          <div className={"dial strokes2"} style={strokesStyle_2} />
          <div className={"dial strokes4"} style={strokesStyle_4} />
          <div className={"dial strokes5"} style={strokesStyle_5} />
          <div className={"dial strokes7"} style={strokesStyle_7} />
          <div className={"dial strokes8"} style={strokesStyle_8} />
          <div className={"dial strokes10"} style={strokesStyle_10} />
          <div className={"dial strokes11"} style={strokesStyle_11} />
        </div>
        <div className={"digital-clock"}>
          {hours}:{minutes}:{seconds}
        </div>
        <div>
          <div>
            <Select_KRSK onChange={this.setHours}/>
          </div>
       </div>
      </div>
    );
  }

  handleDate() {
    const { datediff } = this.state;
    const date = new Date();

    date.setHours(date.getHours() + datediff + this.state.diff); // Разница во времени
    let hours = this.formatTime(date.getUTCHours());
    let minutes = this.formatTime(date.getMinutes());
    let seconds = this.formatTime(date.getSeconds());
    this.setState({ hours, minutes, seconds });
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

class Select_KRSK extends React.Component {
  constructor(props){
    super();
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })

    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    this.props.onChange(e.target.value, label);
  }
//Значения value - значения смещения относительно базового часового пояса (Здесь это Красноярск)
  render(){
    return (
      <div>
        <select id="city" onChange={this.handleChange} value={this.state.value}>
          <option value="3">Владивосток</option>
          <option value="-5">Калининград</option>
          <option value="0">Красноярск</option>
          <option value="-4">Москва</option>
        </select>
      </div>
    )
  }
}

export class Clock_MSK extends React.Component {
  //clockInterval = "";
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.setHours = this.setHours.bind(this);
    this.state = {
      diff: "",
      title: "Москва",
      datediff: 3,
      hours: "",
      minutes: "",
      seconds: ""
    };
  }

  setHours(hours, title) {
    hours = parseInt(hours);
    this.setState({diff: hours, title: title});
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`
    };

    const strokesStyle_12 = {
      transform: 'rotate(360deg)'
    };
    const strokesStyle_9 = {
      transform: 'rotate(270deg)'
    };
    const strokesStyle_6 = {
      transform: 'rotate(180deg)'
    };
    const strokesStyle_3 = {
      transform: 'rotate(90deg)'
    };
    const strokesStyle_1 = {
      transform: 'rotate(30deg)'
    };
    const strokesStyle_2 = {
      transform: 'rotate(60deg)'
    };
    const strokesStyle_4 = {
      transform: 'rotate(120deg)'
    };
    const strokesStyle_5 = {
      transform: 'rotate(150deg)'
    };
    const strokesStyle_7 = {
      transform: 'rotate(210deg)'
    };
    const strokesStyle_8 = {
      transform: 'rotate(240deg)'
    };
    const strokesStyle_10 = {
      transform: 'rotate(300deg)'
    };
    const strokesStyle_11 = {
      transform: 'rotate(330deg)'
    };
  

    const { title } = this.state;
    return (
      <div className={"clock"}>
        <h3>{title}</h3>
        <div className={"analog-clock"}>
          <div className={"dial seconds"} style={secondsStyle} />
          <div className={"dial minutes"} style={minutesStyle} />
          <div className={"dial hours"} style={hoursStyle} />
          <div className={"dial strokes12"} style={strokesStyle_12} />
          <div className={"dial strokes9"} style={strokesStyle_9} />
          <div className={"dial strokes6"} style={strokesStyle_6} />
          <div className={"dial strokes3"} style={strokesStyle_3} />
          <div className={"dial strokes1"} style={strokesStyle_1} />
          <div className={"dial strokes2"} style={strokesStyle_2} />
          <div className={"dial strokes4"} style={strokesStyle_4} />
          <div className={"dial strokes5"} style={strokesStyle_5} />
          <div className={"dial strokes7"} style={strokesStyle_7} />
          <div className={"dial strokes8"} style={strokesStyle_8} />
          <div className={"dial strokes10"} style={strokesStyle_10} />
          <div className={"dial strokes11"} style={strokesStyle_11} />
        </div>
        <div className={"digital-clock"}>
          {hours}:{minutes}:{seconds}
        </div>
        <div>
          <div>
            <Select_MSK onChange = {this.setHours}/>
          </div>
       </div>
      </div>
    );
  }

  handleDate() {
    const { datediff } = this.state;
    const date = new Date();
    date.setHours(date.getHours() + datediff + this.state.diff);
    let hours = this.formatTime(date.getUTCHours());
    let minutes = this.formatTime(date.getMinutes());
    let seconds = this.formatTime(date.getSeconds());
    this.setState({ hours, minutes, seconds });
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

class Select_MSK extends React.Component {
  constructor(props){
    super();
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })

    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    this.props.onChange(e.target.value, label);
  }

  render(){
    return (
      <div>
        <select id="city" onChange={this.handleChange} value={this.state.value}>
          <option value="7">Владивосток</option>
          <option value="-1">Калининград</option>
          <option value="4">Красноярск</option>
          <option value="0">Москва</option>
        </select>
      </div>
    )
  }
}