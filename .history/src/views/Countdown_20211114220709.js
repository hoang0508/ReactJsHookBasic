import React from "react";
class Countdown extends React.Component {
  state = {
    count: 10,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   console.log("me");
    // }, 1000);

    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimesup();
      }
    }
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default Countdown;

const newCountDown = () => {
  return (
    <div>60 hooks</div>
  );
}
export default newCountDown