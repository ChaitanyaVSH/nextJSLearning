import React from "react";

/**
 * Custom layout specific to dashboard subroute.
 */
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <html>
      <body>
        <h1 className="text-3xl">I'm a dashboard layout.</h1>
        {children}
      </body>
    </html>
  )
}

export default Layout;
