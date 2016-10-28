import React from 'react';
import { connect } from 'react-redux';
import { getCurrentFrame } from 'src/selectors';


function PlayerDisplay({ currentFrame }) {
  return (
    <div>
      <br />
      {JSON.stringify(currentFrame, '', 2)}
    </div>
  );
}

PlayerDisplay.propTypes = {
  currentFrame: React.PropTypes.object
};


const mapStateToProps = state => ({
  currentFrame: getCurrentFrame(state)
});


export default connect(mapStateToProps)(PlayerDisplay);
