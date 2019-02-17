import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo5 extends React.Component {
  showAlertInfo = () => {
    SweetAlert.alert({
      type: 'info',
      content: '这个是具体内容',
      title: '这是一个消息标题',
      parentComponent: this
    });
  }

  render() {
    return <Button onClick={this.showAlertInfo}>含有图标消息对话框</Button>;
  }
}

export default SweetAlertDemo5;
