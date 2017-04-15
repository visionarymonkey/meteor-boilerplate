import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Authenticated from '../pages/Authenticated';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Public from '../pages/Public';
import Spinner from '../components/Spinner/Spinner';

const App = props => (
  <Router>
    <div className="App">
      <Header {...props} />
      {props.loading
        ? <Spinner />
        : <Switch>
            <Authenticated exact name="home" path="/" component={Home} {...props} />
            <Public exact name="login" path="/login" component={Login} {...props} />
            <Route component={NotFound} />
          </Switch>}
      <Footer />
    </div>
  </Router>
);

const GET_USER_DATA = gql`
  query getCurrentUser {
    user {
      emails {
        address
        verified
      }
      randomString
      _id
    }
  }
`;

const withData = graphql(GET_USER_DATA, {
  // destructure the default props to more explicit ones
  props: ({ data: { error, loading, user } }) => {
    if (loading) return { loading: true };
    if (error) return { errors: true };

    return {
      currentUser: user,
    };
  },
});

export default withData(App);
