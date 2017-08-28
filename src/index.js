import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app/App';
import {Template} from './template'

ReactDOM.render(<App children={<Template/>} />, document.getElementById('root'));
registerServiceWorker();
