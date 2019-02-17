import { Sweetalert, Button } from 'zent';

class SweetAlertDemo3 extends React.Component {
  autoCloseConfirm = () => {
    const close = Sweetalert.confirm({
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
