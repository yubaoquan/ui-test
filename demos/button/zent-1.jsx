import React, { Component } from 'react';
import Button from 'zent/lib/button';
import Icon from 'zent/lib/icon';

class ZentButtonDemo1 extends Component {
  render() {
    return (
      <>
        <Button></Button>
        <Button onClick={e => console.info(`btn click`, e)}>按钮</Button>
        <Button>按钮钮</Button>
        <Button><span>按</span><span>钮</span></Button>

        <section className="section">
          <Button type="primary">一级按钮</Button>
          <Button type="primary" outline>二级按钮</Button>
          <Button type="danger">一级按钮</Button>
          <Button type="danger" outline>二级按钮</Button>
          <Button type="success">一级按钮</Button>
          <Button type="success" outline>二级按钮</Button>
          <Button>三级按钮</Button>
        </section>

        <section className="section">
          <Button loading>Loading</Button>
          <Button disabled>不可用的按钮</Button>
          <Button size="large">大号按钮</Button>
          <Button>正常按钮</Button>
          <Button size="small">小号按钮</Button>
          <Button bordered={false} type="primary">无边框</Button>
          <Button href="">空链接</Button>
          <Button href="https://baidu.com">百度首页</Button>
          <Button href="https://baidu.com" target="blank">新窗口打开</Button>
          <Button icon="search">搜索</Button>
          <Button><Icon type="check" />保存</Button>
          <Button>下一步<Icon type="right" /></Button>
        </section>
      </>
    );
  }
}

export default ZentButtonDemo1;
