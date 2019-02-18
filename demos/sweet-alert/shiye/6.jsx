import { SweetAlert, Button } from '@ybq/ui';

class SweetAlertDemo6 extends React.Component {
  showAlertConfirm = (confirmType = 'primary') => {
    SweetAlert.confirm({
      confirmType,
      confirmText: '删除',
      cancelText: '取消',
      content: '确认删除吗？',
      title: '请确认',
      parentComponent: this
    });
  }

  showDangerConfirm = () => this.showAlertConfirm('danger');
  showSuccessConfirm = () => this.showAlertConfirm('success');
  showDefaultConfirm = () => this.showAlertConfirm('default');
  showPrimaryConfirm = () => this.showAlertConfirm();


  render() {
    return (
      <>
        <Button onClick={this.showDangerConfirm}>danger</Button>
        <Button onClick={this.showSuccessConfirm}>success</Button>
        <Button onClick={this.showDefaultConfirm}>default</Button>
        <Button onClick={this.showPrimaryConfirm}>primary</Button>
      </>
    );
  }
}

export default SweetAlertDemo6;
