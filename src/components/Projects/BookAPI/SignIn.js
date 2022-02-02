import React, { useState } from "react";
// import Axios from "axios";
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
    FormButton,
    Text
} from './sign-in.js';

const SignIn = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const [signinStatus, setSigninStatus] = useState("");

    // Axios.defaults.withCredentials = true;

    // const signin = () => {
    //     Axios.get("http://localhost:5000/user/signin", {
    //         useremail: email,
    //         password: password,
    //     }).then((response) => {
    //         if (response.data.message) {
    //             setSigninStatus(response.data.message);
    //         } else {
    //             setSigninStatus(response.data[0].email);
    //         }
    //     });
    // };

    // useEffect(() => {
    //     Axios.post("http://localhost:5000/user/signin").then((response) => {
    //         if (response.data.loggedIn === true) {
    //             setSigninStatus(response.data.user[0].email);
    //         }
    //     });
    // }, []);

    ///////////////////////////////////

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();
        try {
            auth.signin(email, password).then(
                () => {
                    navigate("/dashboard");
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

    ///////////////////////////////////


    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSignin}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <FormButton type='submit'>Sign In</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
