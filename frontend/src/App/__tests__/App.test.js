import React from 'react';
import MessageApp from '../App'

import mockAxios from '../../__mocks__/axios.js'
import mockMessages from '../../__mocks__/messages.json'
import errorMock from '../../__mocks__/Error.json'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('MessageApp', () => {
  beforeEach(function(){
    mockAxios.post.mockImplementation(() =>
    Promise.resolve({
      data: []
    }))

    mockAxios.get.mockImplementation(() =>
    Promise.resolve({
      data: []
    }));

  })

  afterEach(function(){
    mockAxios.post.mockClear()
    mockAxios.get.mockClear()
  })

  it('renders without crashing', () => {
    const component = mount(<MessageApp/>);
    expect(component).toMatchSnapshot();
  });

  it('has textbox', () => {
    const component = mount(<MessageApp/>);
    expect(component.exists('textarea#message_box')).toBe(true);
  });

  it('has submit button', () => {
    const component = mount(<MessageApp/>);
    expect(component.exists('button#submit')).toBe(true);
  });

  it('has message list', () => {
    const component = mount(<MessageApp/>);
    expect(component.exists('ul#message_list')).toBe(true);
  });

  it('Loads data from api', () => {
    mount(<MessageApp/>);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('displays messages', () => {
    const component = mount(<MessageApp/>);
    component.instance().setMessages(mockMessages)
    component.instance().setLoaded(true)
    component.update()
    expect(component.find('ul#message_list').children().length).toBe(5);
  });

  it('clears message box on submit', async () => {
    const component = mount(<MessageApp/>);
    component.find('textarea#message_box').simulate('change', { target: { value: 'Hello' } })
    component.find('form').simulate('submit')
    await component.update()
    expect(component.find('textarea').text()).toEqual('');
  });

});

describe('testing err', () => {
  beforeEach(function(){
    mockAxios.get.mockImplementationOnce(() =>
    Promise.reject({
      error: errorMock
    })
  );
    mockAxios.post.mockImplementationOnce(() =>
    Promise.reject({
      error: errorMock
    })
  );
});

afterEach(function(){
  mockAxios.get.mockClear()
  mockAxios.post.mockClear()
})

it('Loads err on GET err', async () => {
  var component = mount(<MessageApp/>);
  await component.setState({
    messages: mockMessages,
    loaded: true,
    error: errorMock
  })
  expect(component.find('#error').text()).toBe('Error: uh oh Error!');
});

// it('Loads err on Post err', async () => {
//   const component = mount(<MessageApp/>);
//   component.find('textarea#message_box').simulate('change', { target: { value: 'bad string' } })
//   component.find('form').simulate('submit')
//   await component.update();
//   expect(mockAxios.post).toHaveBeenCalledTimes(1)
//   expect(component.state()).toBe('Error: Error Text');
// });

});
