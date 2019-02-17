import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo4 extends React.Component {
  promiseConfirm = () => {
    SweetAlert.confirm({
      content: '点击确定后三秒自动关闭',
      title: 'onConfirm返回Promise',
      onConfirm: () => new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      }),
      parentComponent: this
    });
  }

  render() {
    return <Button onClick={this.promiseConfirm}>自动关闭对话框(Promise)</Button>;
  }
}

export default SweetAlertDemo4;
