import React from 'react';
import { shallow, mount } from 'enzyme';

import Description from '../src/components/Description.jsx';


describe('Header', () => {
  const props = {
      name: 'test',
      reviews: 5,
      priceRange: {
        start: 5,
        end: 5,
      },
      tags: ['test'],
      type: ['test']
  }
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Description restaurant={props} debug/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<Description restaurant={props}/>);

    expect(component).toMatchSnapshot();
  })
});
