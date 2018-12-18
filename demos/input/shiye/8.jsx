import React, { Component } from "react";
import Input from '@ybq/ui/dist/input';
import "@ybq/ui/dist/input/index.css";

class ShiyeInputDemo8 extends Component {
  render() {
    return (
      <div>
        <Input value="Blah" disabled />
        <Input value="42" disabled addonBefore="$" />
        <Input value="42" readOnly addonAfter="天" />
        <Input value="42" disabled addonBefore="$" addonAfter="折扣" />
        <Input type="textarea" placeholder="Blah" readOnly />
      </div>
    );
  }
}

export default ShiyeInputDemo8;
