import App from './containers/App'; 
import Home from './containers/Home'; 
import Login from './containers/Login'; 

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
          exact: true, 
          path: './'
          // routes: [
          //   { 
          //     path: '/', 
          //     exact: true, 
          //     component: HomeMain 
          //   },
          //   { 
          //     path: '/setting', 
          //     exact: true, 
          //     component: Setting 
          //   },
          // ]
        }
    ]
  }
];

export default routes;