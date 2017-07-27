import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { staicData } from './data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App graphData={staicData} />, div);
});
