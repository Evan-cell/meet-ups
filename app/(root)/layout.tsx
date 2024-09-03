import React, { Children, ReactNode } from 'react'

const Rootlayout = ({children}:{children : ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Rootlayout
