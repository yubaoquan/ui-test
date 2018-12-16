import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './style.less';

import ButtonStage from './button-stage';
import LayoutStage from './layout-stage';
console.info(123)

class Test extends Component {
  render() {
    return <div>
      <ButtonStage />
      <LayoutStage />
    </div>
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
