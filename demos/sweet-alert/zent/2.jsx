import { Sweetalert, Button, Notify } from 'zent';

class SweetAlertDemo2 extends React.Component {
  onConfirm = () => {
    Notify.success('我真的知道了');
  }

  onCancel = () => {
    Notify.error('我真的取消了');
  }

  showAlertConfirm = () => {
    Sweetalert.confirm({
      content: <p>这个是内容</p>,
      onConfirm: this.onConfirm,
      onCancel: this.onCancel,
      parentComponent: this
    });
  }

  render() {
    return <Button onClick={this.showAlertConfirm}>消息对话框</Button>;
  }
}

export default SweetAlertDemo2;
