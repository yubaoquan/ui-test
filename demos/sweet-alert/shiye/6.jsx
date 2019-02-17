import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo6 extends React.Component {
  showAlertConfirm = () => {
    SweetAlert.confirm({
      confirmType: 'danger',
      confirmText: '删除',
      cancelText: '取消',
      content: '确认删除吗？',
      title: '请确认',
      parentComponent: this
    });
  }

  render() {
    return <Button onClick={this.showAlertConfirm} type="danger">删除</Button>;
  }
}

export default SweetAlertDemo6;
