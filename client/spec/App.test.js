import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import App from '../src/components/App.jsx';
import { cpus } from 'os';
//import { getData } from '../src/components/App.jsx'


describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug/>);

    expect(component).toMatchSnapshot();
  })

  it('should render correctly with no props', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  })

  it('gets data from server', () => {
    const rendered = ReactTestUtils.renderIntoDocument(
      <App />
    );
      expect(rendered.state.restaurant.length).toEqual(2);

  });

  it('can send a get get request', () => {
    const component = shallow(<App />);
    return component.instance().getData().then((data) => {
      expect(data).toHaveLength(2);
    })
    // component.instance().getData();
    // expect(component.instance().getData().data).toHaveLength(2);
    //expect(component.instance().getData()).toBe(true);
  })
});
