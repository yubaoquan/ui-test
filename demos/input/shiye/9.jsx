import React, { Component } from "react";
import Input from '@ybq/ui/dist/input';
import "@ybq/ui/dist/input/index.css";

class ShiyeInputDemo9 extends Component {
  render() {
    return (
      <div>
        {/* <Input value="Blah" autoFocus /> */}
        {/* <Input value="42" autoSelect /> */}
        <Input value="12345" initSelectionStart={1} initSelectionEnd={3} />
      </div>
    );
  }
}

export default ShiyeInputDemo9;
