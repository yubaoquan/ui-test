import React, { Component } from 'react';
import { Input } from 'zent';

class ZentInputDemo1 extends Component {
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
        maxLength={100}
        showCount
        autoSize
      />
    </div>
  }
}

export default ZentInputDemo1;
