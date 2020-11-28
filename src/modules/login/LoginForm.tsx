import React from 'react';
import cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Checkbox, Divider, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { withRouter, RouteComponentProps } from 'react-router-dom';
// import * as yup from 'yup';
import { Col, Row, snackbarSetting } from 'modules/common/Elements';
import FormControlTextField from 'modules/common/FormControlTextField';
import { useSnackbar } from 'notistack';
import { FormattedMessage, useIntl } from 'react-intl';
import LoadingButton from 'modules/common/LoadingButton';
import { BLUE_500 } from 'assets/theme/colors';
import { routes } from 'constants/routes';
import { actionLogin, actionUpdateProfile } from 'modules/system/systemAction';
import { ACCESS_TOKEN, some, SUCCESS_CODE } from 'constants/constants';
import { AppState } from 'modules/rootReducer';

interface Props {}
const LoginForm: React.FC<RouteComponentProps<any> & Props> = (props) => {
  const intl = useIntl();
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

  const [loading, setLoading] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { handleSubmit, control } = useForm({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res: some = await actionLogin(data);
      if (res?.code === SUCCESS_CODE) {
        cookie.set(ACCESS_TOKEN, res?.access_token);
        props?.history?.push(routes.HOME);
        dispatch(actionUpdateProfile(res?.data));
      } else {
        enqueueSnackbar(
          res?.message,
          snackbarSetting((key) => closeSnackbar(key), { color: 'error' })
        );
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: 500 }}
      autoComplete="none"
    >
      <Col style={{ padding: '36px 30px' }}>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
          <FormattedMessage id="IDS_LOGIN_SYSTEM" />
        </Typography>
        <Controller
          render={(itemProps: any) => (
            <FormControlTextField
              {...itemProps}
              formControlStyle={{ width: 280, marginTop: 16 }}
              label={<FormattedMessage id="IDS_EMAIL" />}
              placeholder={intl.formatMessage({ id: 'IDS_ENTER_EMAIL' })}
              inputProps={{ maxLength: 50, autoComplete: 'none' }}
              optional
            />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={(itemProps: any) => (
            <FormControlTextField
              {...itemProps}
              formControlStyle={{ width: 280, marginTop: 12 }}
              label={<FormattedMessage id="IDS_PASSWORD" />}
              placeholder={intl.formatMessage({ id: 'IDS_ENTER_PASSWORD' })}
              inputProps={{ maxLength: 20, autoComplete: 'none' }}
              type="password"
              optional
            />
          )}
          name="password"
          control={control}
        />

        <Row style={{ marginTop: 14 }}>
          <Checkbox
            checked={true}
            onClick={() => {}}
            color="primary"
            style={{ padding: 0, marginRight: 6 }}
          />
          <Typography variant="body2">
            <FormattedMessage id="IDS_SAVE_INFO" />
          </Typography>
        </Row>
        <Row style={{ marginTop: '18px' }}>
          <LoadingButton
            style={{ minWidth: 120, marginRight: 32, height: 36 }}
            type="submit"
            variant="contained"
            color="secondary"
            disableElevation
            loading={loading}
          >
            <Typography variant="subtitle2">
              <FormattedMessage id="IDS_LOGIN" />
            </Typography>
          </LoadingButton>
          <Typography variant="body2" style={{ color: BLUE_500 }}>
            <FormattedMessage id="IDS_FORGOT_PASSWORD" />
          </Typography>
        </Row>
        <Divider style={{ margin: '16px 0px 12px 0px', width: '280px' }} />
        <Row>
          <Typography variant="body2">
            <FormattedMessage id="IDS_HAVE_NOT_ACCOUNT" />
          </Typography>
          &nbsp;
          <Typography variant="body2" style={{ color: BLUE_500 }}>
            <FormattedMessage id="IDS_SIGN_UP_NOW" />
          </Typography>
        </Row>
      </Col>
    </form>
  );
};

export default withRouter(LoginForm);
