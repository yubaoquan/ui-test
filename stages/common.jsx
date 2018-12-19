import React, { Component } from 'react';
import Stage from '../components/stage';
import PropTypes from 'prop-types';

class CommonStage extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    stages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      building: PropTypes.bool,
    })),
    demos: PropTypes.shape({
      shiye: PropTypes.array,
      zent: PropTypes.array,
    }),
  }

  static defaultProps = {
    stages: [],
    demos: { shiye: [], zent: [] },
  }

  render() {
    const { name, stages, demos } = this.props;
    return (
      <Stage name={name}>
        {stages.map((stage, index) => {
          const ShiyeDemo = demos.shiye[index];
          const ZentDemo = demos.zent[index];
          return (
            <Stage name={stage.name} key={stage.name}>
              {stage.building && <span>building...</span>}
              <Stage name="ybq">
                <ShiyeDemo />
              </Stage>
              <Stage name="zent">
                <ZentDemo />
              </Stage>
            </Stage>
          );
        })}
      </Stage>
    )
  }
}

export default CommonStage;
