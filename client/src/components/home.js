import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Home;