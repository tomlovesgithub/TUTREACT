import React from 'react';
import MessageForm from './MessageForm'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

let fetchMock = {
  post: jest.fn(() => Promise.resolve({ data: {} }))
}

describe('Form', () => {
  it('renders without crashing', () => {
    const component = mount(<MessageForm/>);
    expect(component).toMatchSnapshot();
  });


  it('state contains textarea value', () => {
    const component = mount(<MessageForm/>);
    component.find('textarea#message_box').simulate('change', { target: { value: 'Hello' } })
    expect(component.state("currentMessage")).toEqual("Hello")
  });
});
