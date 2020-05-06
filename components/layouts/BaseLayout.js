import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = (props) => {
  const {
    className,
    children,
    user,

  } = props;
  const headerType = props.headerType || "default";

  return (
    <React.Fragment>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          user={user}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
