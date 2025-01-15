import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <div>layout for analytics</div>
        {children}
    </>
  )
}

export default layout