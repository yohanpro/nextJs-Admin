import React from 'react';
import Link from 'next/link';
import { Link as NextLink } from '../../routes';

class Header extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <React.Fragment>
        <p> {title} </p>
        {this.props.children}

        <Link href="/">
          <a style={{ fontSize: '20px' }}> Home </a>
        </Link>

        <Link href="/about">
          <a> About </a>
        </Link>


        <NextLink route="test" params={{ id: '2' }}>
          test 2
        </NextLink>
        <NextLink route="/test/5">test 5</NextLink>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
            .customClass {
              color: red;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
