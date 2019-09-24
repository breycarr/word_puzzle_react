import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expectExport from 'expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('examiming the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4)
  })
})
