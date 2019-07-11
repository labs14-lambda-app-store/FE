import React from 'react';

const NoMatch = props => {
  return (
    <div className="no-match">
      <h1>Aw, Shoot</h1>
      <p>
        <span className="strong">404</span> —{' '}
        <code className="bad-route">{props.location.pathname}</code>
      </p>
      <p>
        Lambda App Store can help you find the next greatest app from talented student developers, but we can't
        find the page you're looking for.
      </p>
    </div>
  );
};

export default NoMatch;
