const get = () => ({
  type: 'GET_PASSWORDS',
  payload: {}
});

const add = () => ({
  type: 'ADD_PASSWORD',
  payload: {}
});

const set = () => ({
  type: 'SET_PASSWORD',
  payload: {}
});

const reducer = (
  state = [
    {
      id: 1,
      name: 'VK',
      url: 'https://vk.com/',
      color: '#D94438',
      icon: 'https://vk.com/images/safari_60.png'
    },
    {
      id: 2,
      name: 'Behance',
      url: 'https://www.behance.net/',
      color: '#DFB95E',
      icon:
        'https://a5.behance.net/4810d5f9dbca889350c869885987eaa1582ffd4f/img/site/apple-touch-icon.png'
    },
    {
      id: 3,
      name: 'Telegram',
      url: 'https://web.telegram.org/#/im',
      color: '#76D399',
      icon: 'https://web.telegram.org/img/iphone_home120.png'
    }
  ],
  action
) => {
  switch (action.type) {
    case 'GET_PASSWORDS':
      return [...state];
    default:
      return state;
  }
};

export { reducer as default, add, get, set };
