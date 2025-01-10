import React from "react"

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <div>I'm albums layout</div>
        {children}
    </>

  )
}

export default layout;
