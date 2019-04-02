import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../src/components/Header.jsx';


describe('Header', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header debug/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  })

  it('should open a modal on click', () => {
    const clickFn = jest.fn();
    const component = shallow(<Header handleModal={clickFn}/>);

    component
      .find('div.headerDiv')
      .simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });
});
