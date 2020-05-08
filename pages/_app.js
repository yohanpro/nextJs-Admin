import React from 'react';
import App from 'next/app';
import { configureStore } from '../redux';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

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


export default withRedux(configureStore)(MyApp);
