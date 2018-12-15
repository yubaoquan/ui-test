import React from 'react';
import './style.less';

export default function(props) {
  return <div className="stage">
    <span className="stage__name">{props.name}</span>
    {props.children}
  </div>
}
