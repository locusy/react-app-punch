import App from './containers/App'; 
import Home from './containers/Home'; 

const routes = [
  {
    component: App,
    routes: [
        { 
          path: '/', 
          exact: true, 
          component: Home 
        },
        // {
        //   component: Home,
        //   routes: [
        //     { 
        //       path: '/', 
        //       exact: true, 
        //       component: HomeMain 
        //     },
        //     { 
        //       path: '/setting', 
        //       exact: true, 
        //       component: Setting 
        //     },
        //   ]
        // }
    ]
  }
];

export default routes;