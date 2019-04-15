import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }
    componentDidMount() {
        this.setState({
            isLoaded: true
        })
    }
    render() {
        return(
            <div className='navbar'>
                <h1>Simple Form</h1>
            </div>
        )
    }
}

export default Navbar;