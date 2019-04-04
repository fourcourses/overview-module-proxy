import React from 'react';
import { shallow, mount } from 'enzyme';

import Navbar from '../src/components/Navbar.jsx';

describe('Header', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Navbar debug/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<Navbar />);

    expect(component).toMatchSnapshot();
  })

  it('test for children', () => {
    const component = shallow(<Navbar />);

    expect(component.find('nav').children()).toBeDefined();
  })


});
