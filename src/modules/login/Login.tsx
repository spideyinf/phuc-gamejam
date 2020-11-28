import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Helmet from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';
import { Col, PageContainer } from 'modules/common/Elements';
import { BLUE_400, GREY_400 } from 'assets/theme/colors';
import { ReactComponent as BlueKey } from 'assets/icons/ic_blueKey.svg';
import { ReactComponent as LogoVNTravel } from 'assets/icons/ic_logoBanner.svg';
import LoginForm from './LoginForm';

interface Props {}
const Login: React.FC<Props> = (props) => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: 'IDS_LOGIN' })}</title>
      </Helmet>
      <PageContainer>
        <Paper
          elevation={6}
          style={{
            display: 'flex',
            borderRadius: '12px',
            flexDirection: 'row',
            height: 440,
          }}
        >
          <Col
            style={{
              position: 'relative',
              backgroundColor: BLUE_400,
              borderRadius: '12px 0px 0px 12px',
              width: 270,
              padding: 32,
            }}
          >
            <LogoVNTravel />
            <Col
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BlueKey />
            </Col>
          </Col>
          <LoginForm />
        </Paper>
        <Typography
          variant="body2"
          style={{ marginTop: 32, textAlign: 'center', color: GREY_400 }}
        >
          <FormattedMessage id="IDS_LICENSE" />
        </Typography>
      </PageContainer>
    </>
  );
};

export default Login;
