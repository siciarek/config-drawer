import React from 'react'

const Menu = (props) => {
  const {router: {params: {project, branch}}} = props

  const tabs = !(!project || !branch)
    ? [
      <li key={1}><a onClick={() => props.router.push(`/editor/${project}/${branch}`)}>Editor</a></li>,
      <li key={2}><a onClick={() => props.router.push(`/view/${project}/${branch}`)}>View</a></li>
    ]
    : null

  // TODO:  className="is-active"

  return (
    <div className="container tabs">
      <ul>
        <li key={0} onClick={() => props.router.push('/')}><a>List</a></li>
        {tabs}
      </ul>
    </div>
  )
}

export default Menu