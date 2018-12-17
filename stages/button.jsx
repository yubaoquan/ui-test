import React, { Component } from 'react';
import '@ybq/ui/dist/button/index.css';
import '@ybq/ui/dist/icon/index.css';
import Stage from '../components/stage/index';
import ShiyeButtonDemo1 from '../demos/button/shiye-1';
import ShiyeButtonDemo2 from '../demos/button/shiye-2';
import ZentButtonDemo1 from '../demos/button/zent-1';
import ZentButtonDemo2 from '../demos/button/zent-2';

class ButtonStage extends Component {
  render() {
    return (
      <Stage name="button">
        <Stage name="ybq">
          <ShiyeButtonDemo1 />
          <ShiyeButtonDemo2 />
        </Stage>

        <Stage name="zent">
          <ZentButtonDemo1 />
          <ZentButtonDemo2 />
        </Stage>
      </Stage>
    );
  }
}

export default ButtonStage;
