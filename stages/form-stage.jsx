import React, { Component } from 'react';
import Stage from '../components/stage/index';
import ZentFormDemo1 from '../form-demos/zent-demo-1';
import ShiYeFormDemo1 from '../form-demos/shiye-demo-1';

class FormStage extends Component {
  render() {
    return (
      <Stage name="form">
        <Stage name="ybq">
          <ShiYeFormDemo1 />
        </Stage>
        <Stage name="zent">
          <ZentFormDemo1 />
        </Stage>
      </Stage>
    );
  }
}

export default FormStage;
