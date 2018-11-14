import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import StoreConfig from './store';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import './static/css/common.css';
import 'ant-design-pro/dist/ant-design-pro.css';


const history = createBrowserHistory();
const store = StoreConfig(history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} store={store}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
