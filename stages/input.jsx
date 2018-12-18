import React, { Component } from 'react';
import Stage from '../components/stage';
import inputDemos from '../demos/input';


const stages = [
  { name: '基本用法' },
  { name: '带前后缀的输入框' },
  { name: 'textarea输入框' },
  { name: 'textarea输入框加计数器' },
  { name: '事件处理' },
  { name: '显示清除按钮' },
  { name: '主动调用 focus 和 select 方法' },
  { name: '不可编辑状态' },
];

class InputStage extends Component {
  render() {
    return (
      <Stage name="input">
        {stages.map((stage, index) => {
          const ShiyeInputDemo = inputDemos.shiye[index];
          const ZentInputDemo = inputDemos.zent[index];
          return (
            <Stage name={stage.name} key={stage.name}>
            {stage.building && <span>building...</span>}
              <Stage name="ybq">
                <ShiyeInputDemo />
              </Stage>
              <Stage name="zent">
                <ZentInputDemo />
              </Stage>
            </Stage>
          );
        })}
      </Stage>
    );
  }
}

export default InputStage;
