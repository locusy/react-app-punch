import App from './containers/App'; 
import Home from './containers/Home'; 
import Login from './containers/Login'; 
import HomeMain from './containers/HomeMain'
import Find from './containers/Find'
import Msg from './containers/Msg'
import My from './containers/My'

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
              path: '/find', 
              exact: true, 
              component: Find
            },
            { 
              path: '/msg', 
              exact: true, 
              component: Msg
            },
            { 
              path: '/my', 
              exact: true, 
              component: My
            }
          ]
        }
    ]
  }
];

export default routes;