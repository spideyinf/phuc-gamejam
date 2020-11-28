import React from 'react';
import cookie from 'js-cookie';
import { Redirect, Route, RouteProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { routes } from 'constants/routes';
import { ACCESS_TOKEN } from 'constants/constants';

interface Props extends RouteProps {}

const ProtectedRoute: React.FC<Props> = (props) => {
  const { ...restProps } = props;

  if (cookie.get(ACCESS_TOKEN)) {
    return <Route {...restProps} />;
  }

  return <Redirect to={{ pathname: routes.LOGIN }} />;
};

export default withRouter(ProtectedRoute);
