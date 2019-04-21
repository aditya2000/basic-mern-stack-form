import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './Register.css';
import Axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            name: '',
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        Axios.post('/api/users', data )
        .then(res => this.props.history.push('/login'))
        .catch(err => console.log(err.response.data))
    }
    render() {
        return(
            <div>
                <Navbar/>
                <div className='register'>
                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="name">
                            <input type="text" placeholder="Name" id="name" onChange={this.handleChange}/>
                        </div>
                        <div className="email">
                            <input type="email" placeholder="Email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Password" id="password" onChange={this.handleChange}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default Register;