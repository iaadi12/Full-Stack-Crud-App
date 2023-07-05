import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function AddUser() {

    let navigate = useNavigate();

    const [users, setUser] = useState({

        name: "",
        userName: "",
        userEmail: "",

    });

    const { name, userName, userEmail } = users;

    const onInputChange = (e) => {
        setUser({ ...users, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(users);
        await axios.post("http://localhost:8080/api/v1/user", users);
        navigate("/")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-lable">
                                Name
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your name' name='name' value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-lable">
                                Username
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your username' name='userName' value={userName} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-lable">
                                Email
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your email address' name='userEmail' value={userEmail} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link type='cancel' className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
