import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './app/App'
import {View} from './dashboard'
import definition from './data/definition'

ReactDOM.render(<App children={<View name={'INO'} description={'master'} definition={definition}/>} />, document.getElementById('root'));
registerServiceWorker();
