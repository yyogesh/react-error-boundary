import React from 'react';


class ErrorBoundary extends React.Component {
    state = { hasError: false };
    // constructor(props) {
    //     super(props);
    //     this.state = { hasError: false };
    // }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log('error', error)
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //     // You can also log the error to an error reporting service
    //     // logErrorToMyService(error, errorInfo);
    //     console.log(error, errorInfo)
    // }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return <div>{this.props.children}</div>
    }
}

export default ErrorBoundary