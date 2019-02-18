import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo7 extends React.Component {
  showAlertInfo = () => {
    SweetAlert.alert({
      closeBtn: true,
      maskClosable: true,
      content: '这个是具体内容',
      parentComponent: this,
      onCancel: () => console.info('on cancel'),
    });
  }

  render() {
    return <Button onClick={this.showAlertInfo}>带有关闭按钮</Button>;
  }
}

export default SweetAlertDemo7;
