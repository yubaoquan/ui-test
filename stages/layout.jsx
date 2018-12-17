import React, { Component } from 'react';
import Stage from '../components/stage';
import Layout from 'zent/lib/layout';
import YLayout from '@ybq/ui/dist/layout';
import '@ybq/ui/dist/layout/index.css';

const { Row, Col } = Layout;
const { Row: YRow, Col: YCol } = YLayout;
class LayoutStage extends Component {

  render() {
    return (
      <Stage name="layout">
        <Stage name="ybq">
          <YRow>
            <YCol span={24}>YCol 24</YCol>
          </YRow>

          <YRow>
            <YCol span={8}>YCol 8</YCol>
            <YCol span={8}>YCol 8</YCol>
            <YCol span={8}>YCol 8</YCol>
          </YRow>

          <YRow>
            <YCol span={8}>YCol 8</YCol>
            <YCol span={8} offset={8}>YCol 8, Offset 8</YCol>
          </YRow>

          <YRow>
            <YCol span={4}>YCol 4</YCol>
            <YCol span={4} offset={4}>YCol 4, Offset 4</YCol>
            <YCol span={4} offset={4}>YCol 4, Offset 4</YCol>
          </YRow>
          <YRow prefix="jiuye" className="foo">
            <YCol span={4} prefix="jiuye" className="bar">change prefix and className</YCol>
          </YRow>

          <YRow>
            <YCol span={-1} >span -1</YCol>
          </YRow>

          <YRow>
            <YCol span={0} >span 0</YCol>
          </YRow>

          <YRow>
            <YCol span={25} >span 25</YCol>
          </YRow>

        </Stage>


        <Stage name="zent">
          <Row>
            <Col span={24}>Col 24</Col>
          </Row>

          <Row>
            <Col span={8}>Col 8</Col>
            <Col span={8}>Col 8</Col>
            <Col span={8}>Col 8</Col>
          </Row>

          <Row>
            <Col span={8}>Col 8</Col>
            <Col span={8} offset={8}>Col 8, Offset 8</Col>
          </Row>

          <Row>
            <Col span={4}>Col 4</Col>
            <Col span={4} offset={4}>Col 4, Offset 4</Col>
            <Col span={4} offset={4}>Col 4, Offset 4</Col>
          </Row>

          <Row prefix="jiuye" className="foo">
            <Col span={4} prefix="jiuye" className="bar">change prefix and className</Col>
          </Row>

          <Row>
            <Col span={-1} >span -1</Col>
          </Row>

          <Row>
            <Col span={0} >span 0</Col>
          </Row>

          <Row>
            <Col span={25} >span 25</Col>
          </Row>
        </Stage>
      </Stage>
    )
  }
}

export default LayoutStage;
