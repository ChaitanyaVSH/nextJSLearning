import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {

  return (
    <html>
        <body>
            <h1>I'm the superior</h1>
            {children}
        </body>
    </html>
  )
}

export default layout;
