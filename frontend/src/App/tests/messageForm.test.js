import React from 'react';
import MessageForm from '../components/MessageForm'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('Form', () => {

  it('renders without crashing', () => {
    const component = mount(<MessageForm/>);
    expect(component).toMatchSnapshot();
  });

  it('has textbox', () => {
    const component = mount(<MessageForm/>);
    expect(component.exists('textarea#message_box')).toBe(true);
  });

  it('has submit button', () => {
    const component = mount(<MessageForm/>);
    expect(component.exists('button#submit')).toBe(true);
  });

  it('should update state message when text entered', () => {
    const component = mount(<MessageForm/>);
    component.find('textarea#message_box').simulate('change', { target: { value: 'Hello' } })
    expect(component.find('textarea#message_box').text()).toEqual('Hello')
  });

  it('sends message with submit', () => {
    let toHaveBeenCalledWithObj;
    const component = mount(<MessageForm
      submitMessage={function(request){toHaveBeenCalledWithObj = request}}
      />);
      component.find('textarea#message_box').simulate('change', { target: { value: 'Hello' } })
      component.find('form').simulate('submit')
      expect(toHaveBeenCalledWithObj).toEqual('Hello')
    });

    it('clears message box on submit', () => {
      const component = mount(<MessageForm
        submitMessage={function(item){return true}}
        />);
        component.find('textarea#message_box').simulate('change', { target: { value: 'Hello' } })
        expect(component.find('textarea#message_box').text()).toEqual('Hello')
        component.find('form').simulate('submit')
        expect(component.find('textarea#message_box').text()).toEqual('')
    });

});
