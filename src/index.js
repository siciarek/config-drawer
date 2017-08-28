import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './app/App';
import {View} from './dashboard'

ReactDOM.render(<App children={<View/>} />, document.getElementById('root'));
registerServiceWorker();
