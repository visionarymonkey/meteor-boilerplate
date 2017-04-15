import React from 'react';

const Home = ({ currentUser }) => (
  <div>
    <pre>{JSON.stringify(currentUser, null, 2)}</pre>
  </div>
);

export default Home;
