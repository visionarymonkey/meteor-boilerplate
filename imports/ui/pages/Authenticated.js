import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Authenticated = ({ currentUser, component }) => (
  <Route
    render={() =>
      currentUser
        ? React.createElement(component, { currentUser })
        : <Redirect to="/login" />
    }
  />
);

Authenticated.propTypes = {
  currentUser: PropTypes.object,
  component: PropTypes.func,
};

export default Authenticated;
