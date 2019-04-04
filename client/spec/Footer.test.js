import React from 'react';
import { shallow, mount } from 'enzyme';

import Footer from '../src/components/Footer.jsx';


describe('Header', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer debug/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  })
});
