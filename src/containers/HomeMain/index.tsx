import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

class Home extends React.Component<any, any>{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
 
  }

  public render() {
    return (
      <div style={{height:'50%',width:'100%',color:'#000'}}>
        主页内容
      </div>
    );
  }
}

export default Home
