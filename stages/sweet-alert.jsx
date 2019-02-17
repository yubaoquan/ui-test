import React, { Component } from 'react';
import CommonStage from './common';
import demos from '../demos/sweet-alert';

const stages = [
  { name: '基础用法' },
  { name: '带有确认和取消按钮' },
  { name: '自动关闭' },
  { name: '回调返回 Promise' },
  { name: '标题旁带有 icon 的 Dialog' },
  { name: '支持设置 Dialog 中的 button 类型' },
  { name: '带有右上角的关闭按钮' },
];

class SweetAlertStage extends Component {
  render() {
    return (
      <CommonStage name="SweetAlert" demos={demos} stages={stages} />
    )
  }
}
export default SweetAlertStage;
