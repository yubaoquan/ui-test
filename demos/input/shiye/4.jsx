import React, { Component } from 'react';
import Input from '@ybq/ui/dist/input';
import '@ybq/ui/dist/input/index.css';

class ShiyeInputDemo1 extends Component {
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

export default ShiyeInputDemo1;
