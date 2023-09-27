import React from "react";
import { Link } from "react-router-dom";

export interface IState {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err: Error, info: any) {
    console.log(err, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error__boundary__wrapper">
          <h1>Something went wrong</h1>
          <Link to="/" className="link__goback">
            Go to home page
          </Link>
        </div>
      );
    }
    return children;
  }
}
