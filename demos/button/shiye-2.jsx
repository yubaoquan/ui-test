import React, { Component } from 'react';
import YButton from '@ybq/ui/dist/button';
import YIcon from '@ybq/ui/dist/icon';
import '@ybq/ui/dist/button/index.css';
import '@ybq/ui/dist/icon/index.css';

class ShiyeButtonDemo1 extends Component {
  render() {
    return (
      <>
        <section className="section">
          <YButton.Group>
            <YButton>加粗</YButton>
            <YButton>斜体</YButton>
            <YButton>下划线</YButton>
          </YButton.Group>
          <YButton.Group>
            <YButton>左对齐</YButton>
            <YButton>居中</YButton>
            <YButton>右对齐</YButton>
          </YButton.Group>
          <YButton.Group>
            <YButton disabled>左对齐</YButton>
            <YButton disabled>居中</YButton>
            <YButton disabled>右对齐</YButton>
          </YButton.Group>
          <br />
          <br />
          <YButton.Group>
            <YButton type="primary" icon="share-alt">分享</YButton>
            <YButton type="primary" icon="download">下载</YButton>
          </YButton.Group>
        </section>

        <section className="section">
          <YButton prefix="jiuye">change prefix</YButton>
          <YButton prefix="jiuye" style={{color: 'red'}}>change prefix</YButton>
        </section>

        <section className="section">
          <YButton.Group prefix="foo" className="bar" style={{opacity: .5}}>
            <YButton type="primary" icon="share-alt">分享</YButton>
            <YButton type="primary" icon="download">下载</YButton>
          </YButton.Group>
          <YButton block >block btn</YButton>
        </section>
      </>
    );
  }
}

export default ShiyeButtonDemo1;
