import React, { Component } from 'react';
import Input from '@ybq/ui/dist/input';
import '@ybq/ui/dist/input/index.css';

class ShiyeInputDemo5 extends Component {
  constructor() {
    super();
    this.state = {
      logs: []
    }
  }
  onPressEnter = (e) => {
    this.addLog('enter pressed');
  }

  onKeyDown = (e) => {
    this.addLog('key down');
  }

  addLog(msg) {
    const { logs } = this.state;
    logs.push(msg)
    this.setState({logs})
  }

  render() {
    return (
      <div>
        <Input onPressEnter={this.onPressEnter} placeholder="Press Enter"/>
        <Input onKeyDown={this.onKeyDown} placeholder="Key down"/>
        <div>{this.state.logs.map((log, index) => <p key={index}>{log}</p>)}</div>
      </div>
    );
  }
}

export default ShiyeInputDemo5;
