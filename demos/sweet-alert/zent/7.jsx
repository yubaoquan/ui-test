import { Sweetalert, Button } from 'zent';

class SweetAlertDemo7 extends React.Component {
  showAlertInfo = () => {
    Sweetalert.alert({
      closeBtn: true,
      maskClosable: true,
      content: '这个是具体内容',
      parentComponent: this
    });
  }

  render() {
    return <Button onClick={this.showAlertInfo}>带有关闭按钮</Button>;
  }
}

export default SweetAlertDemo7;
