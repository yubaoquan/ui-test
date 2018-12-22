import React, { Component } from 'react';
import { Pop, Button } from 'zent';

// 点击close按钮可以关闭弹层
const Content = Pop.withPop(function Content({ pop }) {
  return (
    <div>
      <div>Pop 内容</div>
      <Button onClick={pop.close}>关闭</Button>
    </div>
  );
});

class ZentPopDemo8 extends Component {
  render() {
    return (
      <Pop trigger="click" content={<Content />}>
        <Button type="primary">打开</Button>
      </Pop>
    );
  }
}

export default ZentPopDemo8;
