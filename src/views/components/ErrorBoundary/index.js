import React from 'react';
import Button from '@material-ui/core/Button';
import ajax from '../../../utils/ajax';

/** Why did I not catch your error?

Error boundaries do not catch errors for:

- Event handlers (onClick, onChange, etc)
- Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)

[More Info](https://reactjs.org/docs/error-boundaries.html)
*/
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    ajax({
      method: 'POST',
      url: '/api/errors',
      data: {
        error: error.message,
        errorInfo
      }
    });
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <div style={{ textAlign: 'center', padding: 15, backgroundColor: 'white' }}>
          <h2>Something went wrong.</h2>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6" style={{ textAlign: 'left', marginTop: 15 }}>
              The webiste encountered an unexpected error.<br/>
              This can happen for several reasons, the most common two being:
              <ul>
                <li>We made a mistake</li>
                <li>The website was recently updated and the browser got confused</li>
              </ul>
              You can reload the page, or press the button below to clear the cache and reload (this usually is enough to fix it).<br/>
            </div>
          </div>
          <div style={{ marginTop: 15 }}>
            <Button color="primary" variant="outlined" onClick={() => window.location.reload(true)}>Retry</Button>
          </div>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }  
}

export default ErrorBoundary;
