import React from 'react'

const Menu = (props) => {
  const {router, changes = 0, versions = 0} = props

  const {params: {project, branch}} = router

  const pathname = router.getCurrentLocation().pathname

  const tabs = project && branch
    ? [
      <li key={1} className={pathname.startsWith('/versions') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/versions/${project}/${branch}`)}>Versions ({versions})</a>
      </li>,
      <li key={2} className={pathname.startsWith('/editor') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/editor/${project}/${branch}`)}>Edit</a>
      </li>,
      <li key={3} className={pathname.startsWith('/view') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/view/${project}/${branch}`)}>View</a>
      </li>,
      <li key={4} className={pathname.startsWith('/changes') ? 'is-active' : null}>
        <a onClick={() => props.router.push(`/changes/${project}/${branch}`)}>Changes ({changes})</a>
      </li>,
    ]
    : null

  return (
    <ul>
      <li key={0} className={pathname === '/' ? 'is-active' : null}>
        <a onClick={() => props.router.push('/')}>List</a>
      </li>
      {tabs}
    </ul>
  )
}

export default (Menu)
