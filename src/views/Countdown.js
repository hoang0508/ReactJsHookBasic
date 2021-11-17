import React, { useEffect, useState } from "react";
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
        // this.props.onTimesup();
      }
    }
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

// export default Countdown;

/// sử dụng hook
const NewCountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>{count} hook</div>;
};

export { Countdown, NewCountDown };
