import React from 'react'

const Menu = (props) => {
  const {router: {params: {project, branch}}} = props

  const pathname = props.router.getCurrentLocation().pathname

  console.log(pathname)


  const tabs = !(!project || !branch)
    ? [
      <li key={1} className={pathname.startsWith('/editor') ? 'is-active' : null}><a onClick={() => props.router.push(`/editor/${project}/${branch}`)}>Editor</a></li>,
      <li key={2} className={pathname.startsWith('/view') ? 'is-active' : null}><a onClick={() => props.router.push(`/view/${project}/${branch}`)}>View</a></li>
    ]
    : null

  // TODO:  className="is-active"

  return (
    <div className="container tabs">
      <ul>
        <li key={0} className={pathname === '/' ? 'is-active' : null} onClick={() => props.router.push('/')}><a>List</a></li>
        {tabs}
      </ul>
    </div>
  )
}

export default Menu