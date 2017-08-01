import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { staticData } from './fake/data';

ReactDOM.render(
  <App graphData={staticData} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
