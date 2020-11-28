import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import LoadingIcon from 'modules/common/LoadingIcon';
import { routes } from 'constants/routes';
import ProtectedRoute from 'modules/common/ProtectedRoute';
import MainLayout from 'layout/MainLayout';
import Login from 'modules/login/Login';
import NotFound from 'modules/system/NotFound';

function App() {
  return (
    <>
      <React.Suspense fallback={<LoadingIcon />}>
        <Switch>
          <Route exact path={routes.LOGIN} component={Login} />
          <Route path={routes.NOT_FOUND} component={NotFound} />
          <ProtectedRoute path="*" component={MainLayout} />
        </Switch>
      </React.Suspense>
    </>
  );
}

export default connect(
  (state: any) => ({ account: state.system.profile }),
  {}
)(withRouter(App));
