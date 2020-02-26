import React from 'react'

const LayoutContext = React.createContext(window.innerWidth >= 660 ? 'DESKTOP' : 'MOBILE')

export default LayoutContext
