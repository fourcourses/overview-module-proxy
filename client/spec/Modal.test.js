import React from 'react';
import { shallow, mount } from 'enzyme';

import Modal from '../src/components/Modal.jsx';


describe('Header', () => {
  const props = {
    images: ['test']
  }
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Modal debug state={props}/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<Modal state={props}/>);

    expect(component).toMatchSnapshot();
  })

  it('should close a modal on click', () => {
    const clickFn = jest.fn();
    const component = shallow(<Modal handleModal={clickFn} state={props}/>);

    component
      .find('span#closeModal')
      .simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should go to next image on click', () => {
    const clickFn = jest.fn();
    const component = shallow(<Modal handleModal={clickFn} state={props}/>);

    component
      .find('span#nextImage')
      .simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should go to next image on click', () => {
    const clickFn = jest.fn();
    const component = shallow(<Modal handleModal={clickFn} state={props}/>);

    component
      .find('span#previousImage')
      .simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });


});
