import React from 'react';
import MessageList from '../App/components/messageList'
import mockMessages from '../__mocks__/messages.json'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('List', () => {

  it('renders without crashing', () => {
    const component = mount(<MessageList/>)
    expect(component).toMatchSnapshot()
  });

  it('takes messages as props and displays them', () => {
    const component = shallow(<MessageList
      messages={mockMessages}
      loaded={true}
    />)
    expect(component.find('ul#message_list').children().length).toBe(5)
  });

  it('each message has delete button', () => {
    const component = mount(<MessageList
      messages={mockMessages}
      loaded={true}
    />)
    expect(component.find('ul#message_list').childAt(0).find('#delete').text()).toBe('delete')
  });

  it('each message has update button', () => {
    const component = mount(<MessageList
      messages={mockMessages}
      loaded={true}
    />)
    expect(component.find('ul#message_list').childAt(0).find('#update').text()).toBe('update')
  });

  it('update click triggers edit mode', () => {
    const component = mount(<MessageList
      messages={mockMessages}
      loaded={true}
    />)
    component.find('ul#message_list').childAt(0).find('#update').simulate('click')
    expect(component.find('ul#message_list').childAt(0).find('#edit').text()).toBe('edit')
  });

});
