import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';


const initialValues = {
    Name: "",
    Email: "",
    Password: ""
}

export default function Register(){
    const [serverError, setServerError] = useState("");

    const addUser = (formValues, actions) => {
        const userToPost = {
            Email: formValues.email,
            Password: formValues.password
        };

        axios
            .post("localhost:5000/auth/register", userToPost)
            .then(res => {
                actions.resetForm();
                console.log("Register")
            })
            .catch(err =>{
                console.log(err)
            })
    }
    return(
        <div>
            {serverError}
            <UserForm onSubmit={addUser}/>
        </div>
    )
}

const validationSchema = yup.object().shape({
    Email: yup.string().required("Please Enter Your Email"),
    Password: yup
        .string()
        .required('No password provided')
        .min(8, "Password is too short - needs to be 8 characters minimum")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
})

const UserForm = ({ onSubmit }) => {
    return(
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            render = { props => {
                return (
                    <div>
                        
                        <Form>
                            <h1>Register</h1>
                            <div>
                                <Field
                                    name="Name"
                                    type="text"
                                    placeholder = "Name"/>
                                <ErrorMessage
                                    className="error-field"
                                    name="Name"
                                    component="div"/>
                                <Field
                                    name="Email"
                                    type="email"
                                    placeholder= "Email"/>
                                <ErrorMessage
                                    className= "error-field"
                                    name="Email"
                                    component="div"/>
                                <Field
                                    name="Password"
                                    type="password"
                                    placeholder="Password"/>
                                <ErrorMessage
                                    className="error-field"
                                    name="Password"
                                    component="div"/>
                            </div>
                            <button type="submit">Register</button>
                            <p>Already have an account?&nbsp;&nbsp;&nbsp;
                                <span>
                                    <Link to="/login">Log in</Link>
                                </span>
                            </p>
                        </Form>
                    </div>
                )
            }}
        />
    )
}