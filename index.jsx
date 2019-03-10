import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'zent/css/index.css';
import './style.less';

import ButtonStage from './stages/button';
import LayoutStage from './stages/layout';
import FormStage from './stages/form';
import PopStage from './stages/pop';
import InputStage from './stages/input';
import NotifyStage from './stages/notify';
import SweetAlertStage from './stages/sweet-alert';
import { SideNav } from './components/side-nav';


class Test extends Component {
  onNavClick({ name }) {
    location.href = `/#${name}`;
  }

  render() {
    const items = [
      { name: 'Button' },
      { name: 'Layout' },
      { name: 'Form' },
      { name: 'Input' },
      { name: 'Pop' },
      { name: 'Notify' },
      { name: 'SweetAlert' },
    ];

    return (
      <div className="main-container">
        <SideNav items={items} onClick={this.onNavClick} />
        <div className="stage-container">
          <span id="Button"></span>
          <ButtonStage />

          <span id="Layout"></span>
          <LayoutStage />

          <span id="Form"></span>
          <FormStage />

          <span id="Input"></span>
          <InputStage />

          <span id="Pop"></span>
          <PopStage />

          <span id="Notify"></span>
          <NotifyStage />

          <span id="SweetAlert"></span>
          <SweetAlertStage />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
