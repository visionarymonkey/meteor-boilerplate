import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withApollo } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

const Header = withRouter(({ currentUser, history, client }) => (
  <nav className="navbar navbar-toggleable navbar-tnavbar-light bg-faded">
    <a className="navbar-brand" href="#">
      <img src="/assets/logo.png" width="30" height="30" alt="" />
    </a>
    {currentUser
      ? <p className="navbar-text navbar-right mb-0">
          <button
            onClick={() => {
              Meteor.logout(() => {
                client.resetStore();
              });
            }}
            className="btn btn-sm btn-secondary"
          >
            Log Out
          </button>
        </p>
      : <p className="navbar-text navbar-right mb-0">
          <Link to="/login" className="btn btn-sm btn-secondary">Log In</Link>
        </p>}
  </nav>
));

export default withApollo(Header);
