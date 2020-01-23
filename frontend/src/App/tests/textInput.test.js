import React from 'react'
import TextInput from '../components/TextInput.js'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('textInput', () => {

  it('renders without crashing', () => {
    const component = mount(<TextInput/>);
    expect(component).toMatchSnapshot();
  });

  it('value passed as props', () => {
    const component = shallow(<TextInput value='hello'/>);
    expect(component.find('textarea').props().value).toEqual('hello');
  });

  it('no value passed as props', () => {
    const component = shallow(<TextInput/>);
    expect(component.find('textarea').props().value).toEqual('');
  });

  it('ID passed as props', () => {
    const component = shallow(<TextInput id='testID'/>);
    expect(component.find('textarea').props().id).toEqual('testID');
  });

  it('no ID passed as props', () => {
    const component = shallow(<TextInput/>);
    expect(component.find('textarea').props().id).toEqual(undefined);
  });

  it('value stored in state', () => {
    const component = shallow(<TextInput id='testID'/>);
    expect(component.find('textarea#testID').props().value).toEqual('');
    expect(component.state('value')).toEqual('');
    component.find('textarea#testID').simulate('change', { target: { value: 'HelloWorld' } })
    expect(component.find('textarea#testID').props().value).toEqual('HelloWorld');
    expect(component.state('value')).toEqual('HelloWorld');
  });

});
