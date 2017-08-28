import React from 'react';
import {Header} from './components'
import Menu from './components/Menu'

const App = (props) => {


  return (
    <div>
      <Header title="Config drawer" subtitle="Smart configuration management tool"/>
      <Menu router={props.router}/>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}

export default App;
