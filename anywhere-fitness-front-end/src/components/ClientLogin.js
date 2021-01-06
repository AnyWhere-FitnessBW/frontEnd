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

const ClientLogin = () => {
    return (
        <>
        <h1>Client Log In</h1>
        <Formik
        initialValues={{
            username: "",
            password: ""
        }}
        validationSchema={Yup.object({
            userName: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Required"),
            password: Yup.string()
            .min(8, "Must be at least 8 characters")
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
            <MyTextInput label="Username" name="userName" type="text" />
            <MyTextInput label="Password" name="password" type="text" />
            <button type="submit">Register</button>
        </Form> 
    </Formik>
    </>   
 );
};


export default ClientLogin;