import React from 'react';
import { AppBar, ButtonBase } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GREY_300, PRIMARY } from 'assets/theme/colors';
import { ReactComponent as LogoVNTravel } from 'assets/icons/ic_myTourWhiteLogo.svg';
import { Row } from 'modules/common/Elements';

const MainHeader = () => {
  return (
    <AppBar
      position="sticky"
      style={{
        height: 56,
        backgroundColor: PRIMARY,
        boxShadow: 'none',
        borderRadius: 0,
        borderBottom: `1px solid ${GREY_300}`,
        zIndex: 1000,
      }}
    >
      <Row style={{ height: '100%', padding: '0px 16px 0px 30px' }}>
        <ButtonBase disableTouchRipple onClick={() => {}}>
          <LogoVNTravel />
        </ButtonBase>
        <Row
          style={{
            marginLeft: '24px',
            transition: 'width 0.3s',
            justifyContent: 'center',
          }}
        />
      </Row>
    </AppBar>
  );
};

export default connect(
  (state: any) => ({ account: state.system.profile }),
  {}
)(withRouter(MainHeader));
