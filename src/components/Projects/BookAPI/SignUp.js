import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Auth/auth";
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton
} from './sign-up.js';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = e => {
        e.preventDefault();
        try {
            auth.signup(email, password).then(
                (response) => {
                    // check for token and user already exists with 200
                    //   console.log("Sign up successfully", response);
                    navigate("/profile");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSignup}>
                            <FormH1>Sign up to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <FormButton type='submit'>Sign Up</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignUp;