import React, { Component } from 'react';
import CommonStage from './common';
import demos from '../demos/sweet-alert';

const stages = [
  { name: '基础用法' },
];

class SweetAlertStage extends Component {
  render() {
    return (
      <CommonStage name="SweetAlert" demos={demos} stages={stages} />
    )
  }
}
export default SweetAlertStage;
