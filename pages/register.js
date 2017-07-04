import React, {Component} from "react";
import fetch from "unfetch";
import {initStore} from "./components/register/store";
import withRedux from "next-redux-wrapper";
import LandingLayout from "./components/layout/LandingLayout";
import RegisterForm from "./components/register/RegisterForm";

import {SubmissionError} from "redux-form"

import NProgress from "nprogress";


var submit = (value)=> {
    var request = {
        login: value.login,
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        phone: value.phone,
        password: value.password
    };

    return fetch("/api/accounts", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then(function (response) {
        if (response.ok) {
            Router.push("/login");
            return true;
        }

        return response.json().then(function (error) {
            throw new SubmissionError({_error: error.message});
        });

    });
};



class Register extends Component {
    componentWillMount(){
        if(process.browser) {
            NProgress.start();
        }
    }

    componentDidMount(){
        NProgress.done();

    }


    render() {
        return (
            <LandingLayout>
                <RegisterForm onSubmit={submit}/>
            </LandingLayout>
        )
    }
}


export default withRedux(initStore, null, null)(Register);