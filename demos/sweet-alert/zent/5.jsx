import { Sweetalert, Button } from 'zent';

class SweetAlertDemo5 extends React.Component {
  showAlertInfo = (type = 'info') => {
    console.info(type);
    Sweetalert.alert({
      type,
      content: '这个是具体内容',
      title: '这是一个消息标题',
      parentComponent: this
    });
  }

  showInfo = () => this.showAlertInfo('info');
  showWarning = () => this.showAlertInfo('warning');
  showError = () => this.showAlertInfo('error');
  showSuccess = () => this.showAlertInfo('success');

  render() {
    return (
      <>
        <Button onClick={this.showInfo}>含有 info 图标消息对话框</Button>
        <Button onClick={this.showWarning}>含有 warning 图标消息对话框</Button>
        <Button onClick={this.showError}>含有 error 图标消息对话框</Button>
        <Button onClick={this.showSuccess}>含有 success 图标消息对话框</Button>
      </>
    );
  }
}

export default SweetAlertDemo5;
