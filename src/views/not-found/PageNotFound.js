import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <h1>
          Unable to find the page you are looking for.
        </h1>
        <h2>
        <p>
          <Link to="/" className="btn">Go To Home</Link>
        </p>
        </h2>
      </div>
    );
  }
}

export default PageNotFound;
