import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import store from './store';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';

render(
  <Provider store={store}>
    <Favicon url="https://res.cloudinary.com/dkrup6iyl/image/upload/v1558733722/dev-icon.png" />,
    <App />
  </Provider>,
  document.getElementById('root')
);
