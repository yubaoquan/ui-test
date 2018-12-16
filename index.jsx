import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './style.less';

import ButtonStage from './stages/button-stage';
import LayoutStage from './stages/layout-stage';
import FormStage from './stages/form-stage';
console.info(1234)

class Test extends Component {
  render() {
    return <div>
      <ButtonStage />
      <LayoutStage />
      <FormStage />
    </div>
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
