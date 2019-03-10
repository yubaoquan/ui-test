import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './style.less';

export class SideNav extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    onClick: PropTypes.func,
  }

  onItemClick = (item) => {
    this.props.onClick(item);
  }

  render() {
    const { items } = this.props;
    return (
      <ul className="shiye-side-nav">
        {items.map(item => {
          return <li
            className="shiye-side-nav-item"
            key={item.name}
            onClick={this.onItemClick.bind(this, item)}
          >{item.name}</li>
        })}
      </ul>
    );
  }
}
