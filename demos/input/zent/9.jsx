import React, { Component } from "react";
import { Input } from 'zent';

class ZentInputDemo9 extends Component {

  render() {
    return (
      <div>
        <span>一个页面中autoSelect的输入框同时只能有一个, 所以这个示例没法演示</span>
        {/* <Input value="Blah" autoFocus /> */}
        {/* <Input value="42" autoSelect /> */}
        {/* <Input value="12345" autoFocus autoSelect initSelectionStart={1} initSelectionEnd={3} /> */}
      </div>
    );
  }
}

export default ZentInputDemo9;
