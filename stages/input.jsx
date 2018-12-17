import React, { Component } from 'react';
import Stage from '../components/stage';
import ShiyeInputDemo1 from '../demos/input/shiye/1';
import ShiyeInputDemo2 from '../demos/input/shiye/2';
import ShiyeInputDemo3 from '../demos/input/shiye/3';
import ShiyeInputDemo4 from '../demos/input/shiye/4';

import ZentInputDemo1 from '../demos/input/zent/1';
import ZentInputDemo2 from '../demos/input/zent/2';
import ZentInputDemo3 from '../demos/input/zent/3';
import ZentInputDemo4 from '../demos/input/zent/4';

class PopStage extends Component {
  render() {
    return (
      <Stage name="input">
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
          <Stage name="ybq">
            <ShiyeInputDemo3 />
          </Stage>
          <Stage name="zent">
            <ZentInputDemo3 />
          </Stage>
        </Stage>

        <Stage name="textarea输入框加计数器">
          <Stage name="ybq">
            <ShiyeInputDemo4 />
          </Stage>
          <Stage name="zent">
            <ZentInputDemo4 />
          </Stage>
        </Stage>

        <Stage name="事件处理">
          building...
        </Stage>

      </Stage>
    );
  }
}
export default PopStage;
