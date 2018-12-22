import React, { Component } from 'react';
import { Pop } from '@ybq/ui';

class ShiyePopDemo3 extends Component {
  render() {
    return (
      <div className="zent-doc-pop-container">
        <Pop centerArrow trigger="hover" position="top-left" content="centerArrow 为 true">
          <span className="zent-doc-pop-tag">Y</span>
        </Pop>
        <Pop trigger="hover" position="top-left" content="centerArrow 为 false">
          <span className="zent-doc-pop-tag">N</span>
        </Pop>
      </div>
    );
  }
}

export default ShiyePopDemo3;
