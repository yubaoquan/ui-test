import React, { Component } from 'react';
import Stage from '../components/stage/index';
import ZentFormDemo1 from '../demos/form/zent-1';
import ShiYeFormDemo1 from '../demos/form/shiye-1';

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
