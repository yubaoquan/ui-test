import React, { Component } from 'react';
import { Sweetalert, Button } from 'zent';

class SweetAlertDemo1 extends Component {
  showAlertInfo = () => {
    Sweetalert.alert({
      content: '这个是具体内容',
      parentComponent: this
    });
  }

  foo = () => {
    Sweetalert.alert({
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
