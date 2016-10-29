import React from 'react';
import { Progress } from 'antd';


class TimeProgress extends React.PureComponent {
  static propTypes = {
    duration: React.PropTypes.number.isRequired
  }

  state = {
    percent: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.percent < 100) {
        this.setState({
          percent: this.state.percent + (10000 / this.props.duration)
        });
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { ...rest } = this.props;

    return (
      <Progress {...rest} percent={this.state.percent} />
    );
  }
}


export default TimeProgress;
