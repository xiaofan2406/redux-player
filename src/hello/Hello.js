import React from 'react';
import { connect } from 'react-redux';
import { setWhatToSay } from './hello-actions';
import { getWhatToSay } from '../reducers';


class Hello extends React.PureComponent {
  static propTypes = {
    setWhatToSay: React.PropTypes.func.isRequired,
    message: React.PropTypes.string.isRequired
  }

  handleSetWhatToSay = (e) => {
    if (e.which === 13) {
      this.props.setWhatToSay(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.handleSetWhatToSay} />
        <br />
        Hello {this.props.message}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: getWhatToSay(state)
});

export default connect(mapStateToProps, { setWhatToSay })(Hello);
