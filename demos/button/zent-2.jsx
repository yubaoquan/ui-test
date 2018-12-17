import React, { Component } from 'react';
import Button from 'zent/lib/button';
import Icon from 'zent/lib/icon';

class ZentButtonDemo2 extends Component {
  render() {
    return (
      <>
        <section className="section">
          <Button.Group>
            <Button>加粗</Button>
            <Button>斜体</Button>
            <Button>下划线</Button>
          </Button.Group>
          <Button.Group>
            <Button>左对齐</Button>
            <Button>居中</Button>
            <Button>右对齐</Button>
          </Button.Group>
          <Button.Group>
            <Button disabled>左对齐</Button>
            <Button disabled>居中</Button>
            <Button disabled>右对齐</Button>
          </Button.Group>
          <br />
          <br />
          <Button.Group>
            <Button type="primary" icon="share">分享</Button>
            <Button type="primary" icon="download">下载</Button>
          </Button.Group>
        </section>

        <section className="section">
          <Button prefix="jiuye">change prefix</Button>
          <Button prefix="jiuye" style={{color: 'red'}}>change prefix</Button>
        </section>

        <section className="section">
          <Button.Group prefix="foo" className="bar" style={{opacity: .5}}>
            <Button type="primary" icon="share">分享</Button>
            <Button type="primary" icon="download">下载</Button>
          </Button.Group>
          <Button block >block btn</Button>
        </section>
      </>
    );
  }
}

export default ZentButtonDemo2;
