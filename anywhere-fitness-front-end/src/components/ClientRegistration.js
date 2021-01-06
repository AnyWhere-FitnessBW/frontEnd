import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props})=> {
    const [field, meta] =useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {MediaStream.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </>
    );
};
const ClientRegistration = () => {
    return (
        <>
        <h1>Client Registration</h1>
        <Formik
        initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            email: ""
        }}
        validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            userName: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Required"),
            password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Required")
        })}
    OnSubmit={(values, { setSubmitting  }) => {
        setTimeout (() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }}
    >
        <Form>
            <MyTextInput label="First Name" name="firstName" type="text" />
            <MyTextInput label="Last Name" name="lastName" type="text" />
            <MyTextInput label="Username" name="userName" type="text" />
            <MyTextInput label="Password" name="password" type="text" />
            <MyTextInput label="Email Address" name="email" type="text" />
            <button type="submit">Register</button>
        </Form>
        </Formik> 
    </>       
    );
};










export default ClientRegistration;