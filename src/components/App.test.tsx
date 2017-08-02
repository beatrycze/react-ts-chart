import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { staticData } from '../fake/data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App chartData={staticData} />, div);
});
