import React from 'react';
import { connect } from 'react-redux';

import { getCurrent, getFrames, getIsPlaying } from 'src/selectors';


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
      <div>
        <br />
        {JSON.stringify(frames, '', 2)}
        <br />
        {JSON.stringify(frames[current])}
        <br />
        {JSON.stringify(isPlaying)}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  frames: getFrames(state),
  current: getCurrent(state),
  isPlaying: getIsPlaying(state)
});


export default connect(mapStateToProps)(PlayerList);
