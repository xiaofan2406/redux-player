import React from 'react';
import { connect } from 'react-redux';
import { getCurrentFrame } from 'src/selectors';


function PlayerDisplay({ current }) {
  return (
    <div>
      <br />
      {JSON.stringify(current, '', 2)}
    </div>
  );
}

PlayerDisplay.propTypes = {
  current: React.PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  current: getCurrentFrame(state)
});


export default connect(mapStateToProps)(PlayerDisplay);
