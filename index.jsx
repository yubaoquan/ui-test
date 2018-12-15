import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YButton from '@ybq/ui/dist/button';
import YIcon from '@ybq/ui/dist/icon';
import '@ybq/ui/dist/button/index.css';
import '@ybq/ui/dist/icon/index.css';
import ZBtn from 'zent/lib/button';
import Icon from 'zent/lib/icon';
import Stage from './components/stage/index.jsx';
import 'zent/css/index.css';
import './style.less';

console.info(123)
console.info(YIcon)
console.info(Icon)

class Test extends Component {
  render() {
    return <div>
      <Stage name="ybq">
        <YButton></YButton>
        <YButton className="abc" onClick={e => console.info(`btn click`, e)}>按钮</YButton>
        <YButton>按钮钮</YButton>
        <YButton><span>按</span><span>钮</span></YButton>

        <section className="section">
          <YButton type="primary">一级按钮</YButton>
          <YButton type="primary" outline>二级按钮</YButton>
          <YButton type="danger">一级按钮</YButton>
          <YButton type="danger" outline>二级按钮</YButton>
          <YButton type="success">一级按钮</YButton>
          <YButton type="success" outline>二级按钮</YButton>
          <YButton>三级按钮</YButton>
        </section>

        <section className="section">
          <YButton loading>Loading</YButton>
          <YButton disabled>不可用的按钮</YButton>
          <YButton size="large">大号按钮</YButton>
          <YButton>正常按钮</YButton>
          <YButton size="small">小号按钮</YButton>
          <YButton bordered={false} type="primary">无边框</YButton>
          <YButton href="">空链接</YButton>
          <YButton href="https://baidu.com">百度首页</YButton>
          <YButton href="https://baidu.com" target="_blank">新窗口打开</YButton>
          <YButton icon="search">搜索</YButton>
          <YButton><YIcon type="check" className="iii" />保存</YButton>
          <YButton>下一步<YIcon type="next" /></YButton>
        </section>

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
            <YButton type="primary" icon="share">分享</YButton>
            <YButton type="primary" icon="download">下载</YButton>
          </YButton.Group>
        </section>
      </Stage>

      <Stage name="zent">
        <ZBtn></ZBtn>
        <ZBtn onClick={e => console.info(`btn click`, e)}>按钮</ZBtn>
        <ZBtn>按钮钮</ZBtn>
        <ZBtn><span>按</span><span>钮</span></ZBtn>

        <section className="section">
          <ZBtn type="primary">一级按钮</ZBtn>
          <ZBtn type="primary" outline>二级按钮</ZBtn>
          <ZBtn type="danger">一级按钮</ZBtn>
          <ZBtn type="danger" outline>二级按钮</ZBtn>
          <ZBtn type="success">一级按钮</ZBtn>
          <ZBtn type="success" outline>二级按钮</ZBtn>
          <ZBtn>三级按钮</ZBtn>
        </section>

        <section className="section">
          <ZBtn loading>Loading</ZBtn>
          <ZBtn disabled>不可用的按钮</ZBtn>
          <ZBtn size="large">大号按钮</ZBtn>
          <ZBtn>正常按钮</ZBtn>
          <ZBtn size="small">小号按钮</ZBtn>
          <ZBtn bordered={false} type="primary">无边框</ZBtn>
          <ZBtn href="">空链接</ZBtn>
          <ZBtn href="https://baidu.com">百度首页</ZBtn>
          <ZBtn href="https://baidu.com" target="blank">新窗口打开</ZBtn>
          <ZBtn icon="search">搜索</ZBtn>
          <ZBtn><YIcon type="check" />保存</ZBtn>
          <ZBtn>下一步<Icon type="right" /></ZBtn>
        </section>

        <section className="section">
          <ZBtn.Group>
            <ZBtn>加粗</ZBtn>
            <ZBtn>斜体</ZBtn>
            <ZBtn>下划线</ZBtn>
          </ZBtn.Group>
          <ZBtn.Group>
            <ZBtn>左对齐</ZBtn>
            <ZBtn>居中</ZBtn>
            <ZBtn>右对齐</ZBtn>
          </ZBtn.Group>
          <ZBtn.Group>
            <ZBtn disabled>左对齐</ZBtn>
            <ZBtn disabled>居中</ZBtn>
            <ZBtn disabled>右对齐</ZBtn>
          </ZBtn.Group>
          <br />
          <br />
          <ZBtn.Group>
            <ZBtn type="primary" icon="share">分享</ZBtn>
            <ZBtn type="primary" icon="download">下载</ZBtn>
          </ZBtn.Group>
        </section>
      </Stage>
    </div>
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
