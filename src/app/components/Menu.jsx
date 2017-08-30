import React from 'react'

const Menu = (props) => {
  const {router, changes = 0, versions = 0, version} = props

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
      <li key={4} className={pathname.startsWith('/changes') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/changes/${project}/${branch}`)}>Changes ({changes})</a>
      </li>,
      <li key={3} className={pathname.startsWith('/preview') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/preview/${project}/${branch}`)}>Preview</a>
      </li>,
    ]]
    : tabs

  return (
    <ul>
      <li key={0} className={pathname === '/' ? 'is-active' : null}>
        <a onClick={() => props.router.push('/')}>Catalogue</a>
      </li>
      {xtabs}
    </ul>
  )
}

export default (Menu)
