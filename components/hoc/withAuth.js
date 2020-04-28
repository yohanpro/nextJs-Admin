import React from 'react';
import BaseLayout from '../layouts/BaseLayout';


export default (role) => Component =>
    class withAuth extends React.Component {
        static async getInitialProps(args) {
            const pageProps =
                (await Component.getInitialProps) &&
                (await Component.getInitialProps(args));
            return { ...pageProps };
        }

        renderProtectedPage() {
            console.log(this.props);
            return (
                <BaseLayout>
                    <h3>안녕하세요? {role}</h3>
                </BaseLayout>
            );
        }
        render() {
            return this.renderProtectedPage();
        }
    };

