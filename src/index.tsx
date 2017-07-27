import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { data } from './data';

ReactDOM.render(
  <App graphData={data} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();