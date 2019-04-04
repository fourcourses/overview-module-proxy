import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../src/components/App.jsx';

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  })

  it("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })

  it('App component calls function to fetch data', () => {
    const spy = jest.spyOn(App.prototype, "getData");
    const wrapper = shallow(<App />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('calls function handlesModal', () => {
    const spy = jest.spyOn(App.prototype, "handleModal");
    const wrapper = mount(<App />);
    spy({target: "myModal"});
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
