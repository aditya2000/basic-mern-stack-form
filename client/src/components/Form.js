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
            age: this.state.age
        }
        Axios.post('/api/formData', data )
        .then(res => console.log(res.statusText))
        .catch(err => console.log(err))
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
            </div>
        )
    }
}

export default Form;