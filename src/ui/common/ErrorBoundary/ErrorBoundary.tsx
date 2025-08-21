import React, { Component, memo } from "react";
import { ErrorContainer, ErrorTitle, ErrorMessage, ErrorDetails, RetryButton } from "./ErrorBoundary.style";
import { ERROR_MESSAGES } from "./ErrorBoundary.consts";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export const ErrorBoundary = memo<Props>(({ children }) => {
  return <ErrorBoundaryClass children={children} />;
});

ErrorBoundary.displayName = "ErrorBoundary";

class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>{ERROR_MESSAGES.TITLE}</ErrorTitle>
          <ErrorMessage>
            {ERROR_MESSAGES.DESCRIPTION}
          </ErrorMessage>
          {this.state.error && (
            <ErrorDetails>
              <strong>{ERROR_MESSAGES.ERROR_LABEL}</strong> {this.state.error.toString()}
            </ErrorDetails>
          )}
          <RetryButton onClick={this.handleRetry}>
            {ERROR_MESSAGES.RETRY_BUTTON}
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}