import React from 'react';
import MessageForm from './MessageForm'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('Form', () => {

  it('renders without crashing', () => {
    const component = mount(<MessageForm/>);
    expect(component).toMatchSnapshot();
  });

});
