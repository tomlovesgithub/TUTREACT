import React from 'react';
import MessageList from '../components/MessageList'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('List', () => {

  it('renders without crashing', () => {
    const component = mount(<MessageList/>);
    expect(component).toMatchSnapshot();
  });

  it('takes messages as props', () => {
  const component = shallow(<MessageList
    messages={[{id:1, content:'hello', date:'2000'}]}
    loaded={true}
    />);
  console.log(component.find('ul#message_list'))
  expect(component.state('currentMessage')).toEqual('Hello');
});

});
