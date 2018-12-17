import React, { Component } from "react";
import { Input } from 'zent';
import './style';

class ZentInputDemo1 extends Component {
  render() {
    return (
      <div>
        <Input type="textarea" addonAfter="xx" value={'abc'} placeholder="xxx" />
      </div>
    );
  }
}

export default ZentInputDemo1;
