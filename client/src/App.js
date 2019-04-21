import React, { Component } from 'react';
import Home from './components/home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Form from './components/Form';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/form" component={Form}/>
      </BrowserRouter>
    );
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.usertoken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;
