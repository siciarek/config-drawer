import React from 'react';
import {Header} from './components'
import {Menu} from './components'

const App = (props) => {

  return (
    <div>
      <Header/>
      <Menu router={props.router}/>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default App;
