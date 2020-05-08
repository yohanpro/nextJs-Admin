import { GoogleLogin, GoogleLogout } from 'react-google-login';
import BaseLayout from '../components/layouts/BaseLayout';
import { userLogin } from '../actions';
import { Router } from '../routes';
import { connect } from 'react-redux';



const Login = (props) => {

    const responseGoogle = async (response) => {
        console.log(response);
        userLogin(response).then(result => {
            console.log(result);
        });
    };
    return (
        <BaseLayout>
            <GoogleLogin
                clientId="227126975144-sonbf5hc483gpti1itqjpdvdveebeqc5.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="btn_login" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Login button</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                redirectUri={"http://localhost:3000"}
                cookiePolicy={'single_host_origin'}
            />
        </BaseLayout>

    );
};
export default Login;
// const mapDispatchToProps

// export default connect(null,)(Login);
