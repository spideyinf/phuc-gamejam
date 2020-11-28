import React from 'react';
import { AppBar, ButtonBase } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BACK_GROUND, GJ_BLACK_100, GREY_300, } from 'assets/theme/colors';
import LogoGamejam from 'assets/icons/logo_gamejam.png';
import { Row } from 'modules/common/Elements';

const MainHeader = () => {
  return (
    <AppBar
      position="sticky"
      style={{
        height: 56,
        backgroundColor: GJ_BLACK_100,
        boxShadow: 'none',
        borderRadius: 0,
        zIndex: 1000,
      }}
    >
      <Row style={{ height: '100%', padding: '0px 16px 0px 30px' }}>
        <ButtonBase disableTouchRipple onClick={() => {}}>
          <img
            style={{ width: 120 }}
            src={LogoGamejam} alt="logo"
          />
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
