import * as actions from 'constants/actions';
import { some } from 'constants/constants';
import api from 'utils/helpers/api';

export const actionChangeLanguage = (lang: string) => {
  return {
    type: actions.CHANGE_LANGUAGE,
    payload: lang,
  };
};
export const actionShowLoading = () => ({ type: actions.SHOW_LOADING });
export const actionHideLoading = () => ({ type: actions.HIDE_LOADING });
export const actionUpdateProfile = (data: some) => ({
  type: actions.UPDATE_PROFILE,
  payload: data,
});
// export const actionLogin = (data: some) => async (dispatch: any) => {
//   try {
//     dispatch(actionShowLoading());
//     const res = await api({ method: 'post', url: '/account/login', data });
//     dispatch(actionUpdateProfile(res?.data));
//   } catch (error) {
//   } finally {
//     dispatch(actionHideLoading());
//   }
// };
export const actionLogin = (data: some) => {
  return api({ method: 'post', url: '/account/login', data });
};
