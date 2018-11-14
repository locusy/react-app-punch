import App from './containers/App'; 
import Home from './containers/Home'; 
import Login from './containers/Login'; 
import HomeMain from './containers/HomeMain';
import Setting from './containers/Setting'

const routes = [
  {
    component: App,
    routes: [
        { 
          path: '/login', 
          exact: true, 
          component: Login 
        },
        {
          component: Home,
          routes: [
            { 
              path: '/', 
              exact: true, 
              component: HomeMain 
            },
            { 
              path: '/setting', 
              exact: true, 
              component: Setting 
            },
          ]
        }
    ]
  }
];

export default routes;