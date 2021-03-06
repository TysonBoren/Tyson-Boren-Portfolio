import React, { Component } from "react";
import axios from 'axios';
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorText: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange() {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""

        })

    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions", 
            {
                client: {
                    email:this.state.email,
                    password: this.state.password
                }
            },
            { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                console.log("You can come in...")
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: "Wrong email or password"
                })
                this.props.handleUnSuccessfulAuth();
            }
        }).catch(error => {
            console.log("some error", error)
            this.setState({
                errorText: "An error occured"
            })
            this.props.handleUnSuccessfulAuth();
        });
        //prevents email and password being printed in console. 
        event.preventDefault();
    }



    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <div>{this.state.errorText}</div>
                
                {/* <h2>{this.state.email}</h2>
                <h2>{this.state.password}</h2> */}

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                <div className="form-group">
                    <FontAwesomeIcon icon="envelope" />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Your email..."
                        value={this.state.email}
                        onChange={this.handleChange}
                        autoComplete='off'
                    />
                </div>

                <div className="form-group">
                <FontAwesomeIcon icon="lock" />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Your Password..."
                        value={this.state.password}
                        onChange={this.handleChange}
                        autoComplete='off'
                    />
                </div>
                    <button type="submit" className="btn">Login</button>
                </form>



            </div>
        )
    }
}