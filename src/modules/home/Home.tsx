import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = () => {
  return <div>Home123</div>;
};

export default connect(
  (state: any) => ({ account: state.system.profile }),
  {}
)(withRouter(Home));
