import React, { Component } from 'react';
import Stage from '../components/stage';
import { Pop, Button, Input } from 'zent';
import ShiyePopDemo1 from '../demos/pop/shiye-1';
import ZentPopDemo1 from '../demos/pop/zent-1';

class PopStage extends Component {
  render() {
    return (
      <Stage name="pop">
        <Stage name="ybq">
          <ShiyePopDemo1 />
        </Stage>
        <Stage name="zent">
          <ZentPopDemo1 />
        </Stage>
      </Stage>
    )
  }
}
export default PopStage;
