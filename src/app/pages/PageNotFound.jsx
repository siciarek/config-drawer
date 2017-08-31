import React from 'react'
import SystemPage from './SystemPage'

const PageNotFound = ({code, message, icon}) => <SystemPage code={code} message={message} icon={icon}/>

PageNotFound.defaultProps = {
  code: 404,
  message: 'Page not found',
  icon: 'error_outline'
}

export default PageNotFound