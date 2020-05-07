import React from "react";
import Header from "../shared/Header";
import Head from "next/head";
import { Container, Row, Col } from 'reactstrap';


const BaseLayout = (props) => {
  const {
    className,
    children,
    user,

  } = props;
  const headerType = props.headerType || "default";

  return (
    <React.Fragment>
      <Container>
        <div className="layout-container">
          <main className={`cover ${className}`}>
            {children}
          </main>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BaseLayout;
