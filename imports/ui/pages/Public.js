import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Public = ({ currentUser, component }) => (
  <Route
    render={() => {
      return !currentUser
        ? React.createElement(component, { currentUser })
        : <Redirect to="/" />;
    }}
  />
);

Public.propTypes = {
  currentUser: PropTypes.object,
  component: PropTypes.func,
};

export default Public;
