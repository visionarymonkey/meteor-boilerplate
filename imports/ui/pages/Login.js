import React from 'react';
import { withApollo } from 'react-apollo';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
});

/*
 * Demonstrate the use of `withApollo` higher order component to give access to
 * the Apollo Client directly in the component's props as `client`.
 * `client` is used here to reset the data store when the current user changes.
 * See for more information: http://dev.apollodata.com/core/meteor.html#Accounts
 */
const Login = props => (
  <div className="col-md-4 offset-md-4">
    <h2 className="pt-3">Sign In</h2>
    <Accounts.ui.LoginForm
      onSignedInHook={() => props.client.resetStore()}
      onSignedOutHook={() => props.client.resetStore()}
      onPostSignUpHook={() => props.client.resetStore()}
    />
  </div>
);

export default withApollo(Login);
