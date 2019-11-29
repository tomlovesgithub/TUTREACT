export default {
  post: jest.fn(() => {
    console.log('???');
    Promise.resolve({ data: {} })
  }),
  get: jest.fn(() => Promise.resolve({ data: {} }))
};
