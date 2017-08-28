import React from 'react';
import {Header} from './components'

const App = ({children}) => {

  return (
    <div>
      <Header title="Config drawer" subtitle="Smart configuration management tool"/>
      <section className="section">
        <div className="container">
          {children}
        </div>
      </section>
    </div>
  )
}

export default App;
