import React from 'react';
import MessageForm from '../components/MessageForm'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('Form', () => {

  it('renders without crashing', () => {
    const component = mount(<MessageForm/>);
    expect(component).toMatchSnapshot();
  });

  it('should update state message when text entered', () => {
  const component = shallow(<MessageForm/>);
  component.find('textarea#message_box').simulate('change', { target: { value: 'Hello' } })
  expect(component.state('currentMessage')).toEqual('Hello');
});

});
