import React, { Component } from "react";
import { Input } from 'zent';

class ZentInputDemo3 extends Component {
  render() {
    return (
      <div>
        <Input type="textarea" addonAfter="xx" placeholder="xxx" autoSize />
      </div>
    );
  }
}

export default ZentInputDemo3;
