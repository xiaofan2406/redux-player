import React from 'react';
import { connect } from 'react-redux';
import { getCurrent, getFrames, getIsPlaying } from 'src/selectors';
import { Menu, Icon } from 'antd';

import './PlayerList.css';


class PlayerList extends React.PureComponent {
  static propTypes = {
    // { action, duration }
    frames: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    current: React.PropTypes.number.isRequired,
    isPlaying: React.PropTypes.bool.isRequired
  };

  get = () => {}

  render() {
    const { frames, current, isPlaying } = this.props;

    return (
      <Menu
        selectedKeys={[`${current}`]}
        mode="vertical"
        className="PlayerList"
      >
        {frames.map((frame, index) => (
          <Menu.Item
            key={index}
            className={`${current === index && isPlaying ? 'active' : ''}`}
          >
            {frame.name}
            {current === index && <Icon type="caret-left" />}
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}


const mapStateToProps = state => ({
  frames: getFrames(state),
  current: getCurrent(state),
  isPlaying: getIsPlaying(state)
});


export default connect(mapStateToProps)(PlayerList);
