import React from "react";
class Countdown extends React.Component {
  state = {
    count: 60,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   console.log("me");
    // }, 1000);

    setInterval(() => {
      console.log("me");
    }, 1000);
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default Countdown;
