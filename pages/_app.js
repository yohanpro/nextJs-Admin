import React from 'react';
import App from 'next/app';

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
        const { Component, pageProps } = this.props;

        return <Component {...pageProps} />;
    }
}

export default MyApp;
