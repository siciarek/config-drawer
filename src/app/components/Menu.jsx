import React from 'react'
import config from '../config'

const Menu = (props) => {
  const {router, changes = 0, versions = 0, version, dirty = true} = props

  const {params: {project, branch}} = router

  const pathname = router.getCurrentLocation().pathname

  const tabs = project && branch
    ? [
      <li key={1} className={pathname.startsWith('/versions') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/versions/${project}/${branch}`)}>Versions ({versions})</a>
      </li>,
    ]
    : []

  const xtabs = tabs.length > 0 && version > 0
    ? [...tabs, [
      <li key={2} className={pathname.startsWith('/editor') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/editor/${project}/${branch}`)}>Edit</a>
      </li>,
      <li key={3} className={pathname.startsWith('/changes') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/changes/${project}/${branch}`)}>Changes ({changes})</a>
      </li>,
      dirty === true ? null : <li key={5}>
        <a onClick={() => window.location.assign(`${config.serviceUrl}/configuration/${project}/${branch}/${version}/config.ini`)}>
          <span className="icon is-small"><i className="fa fa-download"></i></span>
          <span>Download selected</span>
        </a>
      </li>,
      <li key={6}>
        <a onClick={() => window.location.assign(`${config.serviceUrl}/configuration/${project}/${branch}/config.ini`)}>
          <span className="icon is-small"><i className="fa fa-download"></i></span>
          <span>Download latest</span>
        </a>
      </li>,
    ]]
    : tabs

  return (
    <ul>
      <li key={0} className={pathname === '/' ? 'is-active' : null}>
        <a onClick={() => props.router.push('/')}>Projects</a>
      </li>
      {xtabs}
    </ul>
  )
}

export default (Menu)
