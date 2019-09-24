import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import expect from 'expect';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Appearance of page', () => {
  it('welcomes the user', () => {
    const component = shallow(<App />)
    expect(toJson(component)).toMatchSnapshot()
  })
})


