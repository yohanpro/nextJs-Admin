import { GoogleLogin, GoogleLogout } from 'react-google-login';
import BaseLayout from '../components/layouts/BaseLayout';
import { userLogin } from '../actions';
import { Router } from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jwt-simple';

import * as types from '../redux/actions/ActionTypes';

const Login = (props) => {
  const auth = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
    //뭐 지금은 딱히 상관없으니..
    userLogin(response.profileObj).then((result) => {
      dispatch({
        type: types.USER_LOGIN,
        payload: result,
      });
      localStorage.setItem('user', JSON.stringify(result));
      Router.push('/home');
    });
  };

  return (
    <BaseLayout>
      <GoogleLogin
        clientId="227126975144-sonbf5hc483gpti1itqjpdvdveebeqc5.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="btn_login"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Google Login button
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        redirectUri={'http://localhost:3000'}
        cookiePolicy={'single_host_origin'}
      />
    </BaseLayout>
  );
};

export default Login;
