import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import axios from 'axios'

export default class App extends React.Component<any, any>{
  public render() {
    return (
      <div style={{height:'100%'}}>{renderRoutes(this.props.route.routes)}</div> 
    );
  }
}
