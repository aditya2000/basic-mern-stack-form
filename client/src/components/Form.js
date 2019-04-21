import React, { Component } from 'react';
import './Form.css';
import Axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            name: '',
            age: null,
            tokenConfig: null
        }
    }
    componentDidMount() {

        const token = localStorage.usertoken;
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        if(token) {
            config.headers['x-auth-token'] = token;
        }

        this.setState({
            isLoaded: true,
            tokenConfig: config
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
            age: this.state.age
        }
        Axios.post('/api/formData', data, this.state.tokenConfig )
        .then(res => console.log(res.statusText))
        .catch(err => console.log(err))
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    render() {
        return(
            <div className='form'>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="name">
                        <input type="text" placeholder="Name" id="name" onChange={this.handleChange}/>
                    </div>
                    <div className="age">
                        <input type="number" placeholder="Age" id="age" min="0" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Form;