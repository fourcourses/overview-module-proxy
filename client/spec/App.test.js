import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../src/components/App.jsx';
import { getData } from '../src/components/App.jsx'


describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  })

  it('can send a get get request', () => {
    return App.getData()
    .then(data => {
      expect(data).toBeDefined();
    })
  })
});
