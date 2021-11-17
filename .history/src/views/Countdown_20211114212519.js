import React from "react";
class Countdown extends React.Component {
  state = {
    count: 60,
  };
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default Countdown;
