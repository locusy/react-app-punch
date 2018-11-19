import App from './containers/App'; 
import Home from './containers/Home'; 
import Login from './containers/Login'; 
import HomeMain from './containers/HomeMain'
import Detail from './containers/Detail'
import Find from './containers/Find'
import Msg from './containers/Msg'
import Mine from './containers/Mine'

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
              path: '/home',
              exact: true, 
              component: HomeMain,
            },
            { 
              path: '/home/:id',
              exact: true, 
              component: Detail,
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
              path: '/mine', 
              exact: true, 
              component: Mine
            }
          ]
        }
    ]
  }
];

export default routes;