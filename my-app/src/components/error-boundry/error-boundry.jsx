import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Error log:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>DON'T PANIC!</h1>
          <h2>Something went wrong but we will fix it soon :)</h2>
        </div>
      );
    }
    return this.props.children;
  }
}
