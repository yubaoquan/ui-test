import React, { Component } from "react";
import Stage from "../components/stage";
import ShiyeInputDemo1 from "../demos/input/shiye-1";
import ZentInputDemo1 from "../demos/input/zent-1";

class PopStage extends Component {
  render() {
    return (
      <Stage name="input">
        <Stage name="ybq">
          <ShiyeInputDemo1 />
        </Stage>
        <Stage name="zent">
          <ZentInputDemo1 />
        </Stage>
      </Stage>
    );
  }
}
export default PopStage;
