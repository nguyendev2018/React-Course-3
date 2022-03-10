import React, { Component } from 'react'
import './UserProfile.css'
export default class UserProfile extends Component {
    state = {
        values: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        },
        errors: {
            firstName: "firstName is required",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    }
    handleChangeValue = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state);
        })
    }
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center' }}>
                <form style={{ fontSize: 'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif', width: 600 }} className=" bg-white p-5 m-5" >
                    <h1 className="text-center mt-0 mb-5">User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input type="text" name="firstName" value={this.state.values.firstName} required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>FirstName</label>
                                <span className='text text-danger'>{this.state.errors.firstName}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input type="text" name="lastName" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>LastName</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input type="text" name="userName" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>UserName</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input type="text" name="email" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input name="password" type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input name="passwordConfirm" type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>PasswordConfirm</label>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <button className="btn text-white bg-dark w-100 col-12" style={{ fontSize: 25 }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
