import React from 'react';

import './styles.css';

/*
 * A reusable loading component
 */

const Loading = () => (
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
);

export default Loading;
