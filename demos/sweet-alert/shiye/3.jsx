import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo3 extends React.Component {
  autoCloseConfirm = () => {
    const close = SweetAlert.confirm({
      content: <p>一秒后自动关闭</p>,
      parentComponent: this
    });

    setTimeout(close, 1000);
  }

  render() {
    return <Button onClick={this.autoCloseConfirm}>自动关闭对话框</Button>;
  }
}

export default SweetAlertDemo3;
