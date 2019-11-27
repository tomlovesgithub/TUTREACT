import React from 'react';
import ReactDOM from 'react-dom';
import MessageApp from '../App'
import mockAxios from '../__mocks__/axios.js'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter()})

<<<<<<< HEAD:frontend/src/test/App.test.js
=======
let axiosMock = {
  post: jest.fn(() => Promise.resolve({ data: {} }))
}

>>>>>>> e0af37a9ab3e42782abaf0a243a88505dbb140ff:frontend/src/App.test.js
describe('App', () => {
  beforeEach(function(){
    mockAxios.post.mockImplementation(() =>
    Promise.resolve({
      data: []
    }))
  })
  afterEach(function(){
    mockAxios.post.mockClear()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageApp />, div);
    ReactDOM.unmountComponentAtNode(div);
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

  it('posts data on submit', () => {
    const component = mount(<MessageApp/>);
    component.find('textarea#message_box').simulate('change', { target: { value: 'Hello' } })
    component.find('form').simulate('submit')
<<<<<<< HEAD:frontend/src/test/App.test.js
    expect(mockAxios.post).toHaveBeenCalled();
=======
    expect(axiosMock.post).toHaveBeenCalled();
>>>>>>> e0af37a9ab3e42782abaf0a243a88505dbb140ff:frontend/src/App.test.js
  });

});
