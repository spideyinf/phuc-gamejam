import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, PageWrapper } from 'modules/common/Elements';
import { GREY_100 } from 'assets/theme/colors';
import MainHeader from './MainHeader';
import LoadingIcon from 'modules/common/LoadingIcon';
import { routes } from 'constants/routes';
import Home from 'modules/home/Home';

const MainLayout = () => {
  return (
    <PageWrapper style={{ background: GREY_100 }}>
      <MainHeader />
      <Col
        style={{
          padding: '16px 24px',
          flex: 1,
          paddingLeft: 30,
        }}
      >
        <React.Suspense fallback={<LoadingIcon />}>
          <Switch>
            <Route path={routes.HOME} component={Home} />
            {/* <Redirect to={routes.NOT_FOUND} /> */}
          </Switch>
        </React.Suspense>
      </Col>
      {/* <DefaultFooter /> */}
    </PageWrapper>
  );
};

export default connect(
  (state: any) => ({ account: state.system.profile }),
  {}
)(withRouter(MainLayout));
