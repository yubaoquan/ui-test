import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './style.less';

import ButtonStage from './stages/button';
import LayoutStage from './stages/layout';
import FormStage from './stages/form';
import PopStage from './stages/pop';
import InputStage from './stages/input';
console.info(12345)

class Test extends Component {
  render() {
    return <div>
      {/* <ButtonStage /> */}
      {/* <LayoutStage /> */}
      <FormStage />
      {/* <InputStage /> */}
      <PopStage />
    </div>
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
