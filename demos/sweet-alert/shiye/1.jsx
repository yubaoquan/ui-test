import React, { Component } from 'react';
import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo1 extends Component {
  showAlertInfo = () => {
    SweetAlert.alert({
      content: '这个是具体内容',
      parentComponent: this
    });
  }
  foo = () => {
    SweetAlert.alert({
      content: (
        <div>
          <Button onClick={this.foo}>mmm</Button>
        </div>
      ),
      parentComponent: this
    });
  }

  render() {
    return (
      <>
        <Button onClick={this.showAlertInfo}>消息对话框</Button>
        <Button onClick={this.foo}>堆叠</Button>
      </>
    );
  }
}

export default SweetAlertDemo1;
