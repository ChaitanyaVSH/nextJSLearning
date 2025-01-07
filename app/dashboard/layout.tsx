import React from "react";

/**
 * Custom layout specific to dashboard subroute.
 */
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <div>I'm rendered only on main and sub routes like /dashboard/users, /dashboard/users/[..] </div>
        {children}
    </>
  )
}

export default Layout;
