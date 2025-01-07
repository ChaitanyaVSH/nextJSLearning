import React from "react";

/**
 * Custom layout specific to dashboard subroute.
 */
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <h1 className="text-3xl">I'm a dashboard layout.</h1>
        {children}
    </>
  )
}

export default Layout;
