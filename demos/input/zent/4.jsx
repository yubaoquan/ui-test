import React, { Component } from 'react';
import { Input } from 'zent';

class ZentInputDemo4 extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    return <div>
      <Input
        type="textarea"
        value={value}
        onChange={this.handleChange}
        maxLength={20}
        showCount
        autoSize
      />
    </div>
  }
}

export default ZentInputDemo4;
