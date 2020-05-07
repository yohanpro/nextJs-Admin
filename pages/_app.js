import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }
    detectMobileAndAddPcClass() {
        const isBrowser = process.browser ? true : false;
        console.log('isBrowser', isBrowser);
        if (isBrowser) {
            const isMobile = /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
            console.log("detectMobileAndAddPcClass -> isMobile", isMobile);
            if (!isMobile) {
                document.querySelector('body').classList.add('pc');
            }
        }
    }
    render() {
        this.detectMobileAndAddPcClass();
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}
const configureStore = (initialState, options) => {
    const middlewares = []; // 미들웨어들을 넣으면 된다.
    const enhancer = process.env.NODE_ENV === 'production' ?
        compose(applyMiddleware(...middlewares)) :
        composeWithDevTools(
            applyMiddleware(...middlewares)
        );
    const store = createStore(reducer, initialState, enhancer);
    return store;
};

export default withRedux(configureStore)(MyApp);
