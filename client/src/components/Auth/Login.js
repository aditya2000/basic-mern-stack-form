import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Login.css';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            email: '',
            password: ''
        }
    }
    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        }
        Axios.post('/api/auth', data )
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data
          })
        .then(res => {
            if(res) {
                this.props.history.push('/form');
            }
        })
        .catch(err => console.log(err.response.data))
    }
    render() {
        return(
            <div>
                <Navbar/>
                <div className='login'>
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="email">
                            <input type="email" placeholder="Email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Password" id="password" onChange={this.handleChange}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        )
    }
}

export default Login;