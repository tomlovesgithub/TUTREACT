import React from 'react';
import MessageApp from '../App'

import mockAxios from '../../__mocks__/axios.js'
// import mockMessage from '../../__mocks__/message.json'
import mockMessages from '../../__mocks__/messages.json'
import mockMessagesAdded from '../../__mocks__/messagesAdd.json'
import mockMessagesDeleted from '../../__mocks__/messagesDel.json'

import errorMock from '../../__mocks__/error.json'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

describe('MessageApp', () => {

  beforeEach(function(){

    mockAxios.post.mockImplementation(() =>
    Promise.resolve({ data: mockMessagesAdded }))

    mockAxios.get.mockImplementation(() =>
    Promise.resolve({ data: mockMessages }))

    mockAxios.delete.mockImplementation(() =>
    Promise.resolve({ data: mockMessagesDeleted }))

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

  it('displays messages', async () => {
    const component = await mount(<MessageApp/>);
    await component.update()
    expect(component.find('ul#message_list').children().length).toBe(5);
  });

  it('clears message box on submit and updates list', async () => {
    const component = await mount(<MessageApp/>);
    await component.find('form').simulate('submit')
    await component.update()
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(component.find('textarea').text()).toEqual('');
    expect(component.find('ul#message_list').children().length).toBe(6);
  });

  it('removes message on delete', async () => {
    const component = await mount(<MessageApp/>);
    await component.update()
    await component.find('ul#message_list').childAt(0).find('#delete').simulate('click');
    await component.update()
    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
    expect(component.find('ul#message_list').children().length).toBe(4);
  });

  // it('updates message on update', async () => {
  //   const component = await mount(<MessageApp/>);
  //   await component.update()
  //   component.find('ul#message_list').childAt(0).find('#delete').simulate('click');
  //   expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  //   expect(component.find('textarea').text()).toEqual('');
  // });

});

describe('testing err', () => {
  beforeEach(function(){

    mockAxios.get.mockImplementationOnce(() =>
    Promise.reject({response: errorMock}));

    mockAxios.post.mockImplementationOnce(() =>
    Promise.reject({response: errorMock}));

    mockAxios.delete.mockImplementationOnce(() =>
    Promise.reject({response: errorMock}));

  });

  afterEach(function(){
    mockAxios.get.mockClear()
    mockAxios.post.mockClear()
  })

  it('loads err on GET err', async () => {
    var component = await mount(<MessageApp/>);
    await component.update()
    expect(component.state().error).toEqual({data:"uh oh Error!"});
    expect(component.find('#error').text()).toBe('Error: uh oh Error!');
  });

  it('loads err on Post err', async () => {
    const component = mount(<MessageApp/>);
    component.find('textarea#message_box').simulate('change', { target: { value: 'bad string' } })
    await component.find('form').simulate('submit')
    await component.update()
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(component.state().error).toEqual({data:"uh oh Error!"});
    expect(component.find('#error').text()).toBe('Error: uh oh Error!');
  });

});
