import React, { Component } from "react";
import Stage from "../components/stage";
import ShiyeInputDemo1 from "../demos/input/shiye-1";
import ShiyeInputDemo2 from "../demos/input/shiye-2";
import ShiyeInputDemo3 from "../demos/input/shiye-3";

import ZentInputDemo1 from "../demos/input/zent-1";
import ZentInputDemo2 from "../demos/input/zent-2";
import ZentInputDemo3 from "../demos/input/zent-3";

class PopStage extends Component {
  render() {
    return <Stage name="input">
        <Stage name="基本用法">
          <Stage name="ybq">
            <ShiyeInputDemo1 />
          </Stage>
          <Stage name="zent">
            <ZentInputDemo1 />
          </Stage>
        </Stage>

        <Stage name="带前后缀的输入框">
          <Stage name="ybq">
            <ShiyeInputDemo2 />
          </Stage>
          <Stage name="zent">
            <ZentInputDemo2 />
          </Stage>
        </Stage>

        <Stage name="textarea输入框">
            building...
          <Stage name="ybq">
            <ShiyeInputDemo3 />
          </Stage>
          <Stage name="zent">
            <ZentInputDemo3 />
          </Stage>
        </Stage>
      </Stage>;
  }
}
export default PopStage;
