import React, { Component } from 'react';
import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo1 extends Component {
  showAlertInfo = () => {
    SweetAlert.alert({
      content: '这个是具体内容',
      parentComponent: this
    });
  }

  render() {
    return <Button onClick={this.showAlertInfo}>消息对话框</Button>;
  }
}

export default SweetAlertDemo1;
