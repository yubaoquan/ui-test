import React, { Component } from 'react';
import './style.less';

export default class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  onShowCodeClick = () => {
    const { showCode } = this.state;
    this.setState({ showCode: !showCode });
  }

  render() {
    const { code, name, children } = this.props;
    const { showCode } = this.state;
    return (
      <div className="stage">
        <span className="stage__name">{name}</span>
        {children}
        {code && <div className="code-title" onClick={this.onShowCodeClick}>查看代码</div>}
        {showCode && ( <pre className="code-content">{code}</pre> )}
      </div>
    );
  }
}
