import fetch from "unfetch";
import React, {Component} from "react";
import {initStore} from "./components/login/store";
import withRedux from "next-redux-wrapper";
import LandingLayout from "./components/layout/LandingLayout";
import LoginForm from "./components/login/LoginForm";
import {SubmissionError} from "redux-form";
import Router from "next/router";
import NProgress from "nprogress";


var submit = (value)=> {
    return fetch("/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({hungry: true})
    }).then(function (response) {
        if (response.ok) {
            Router.push("/secured/home");
            return true;
        }

        return response.json().then(function (error) {
            throw new SubmissionError({_error: error.message});
        });

    });
};


class Login extends Component {
    componentWillMount() {
        if (process.browser) {
            NProgress.start();
        }
    }

    componentDidMount() {
        NProgress.done();

    }


    render() {
        return (
            <LandingLayout>
                <LoginForm onSubmit={submit}/>
            </LandingLayout>
        )
    }
}


export default withRedux(initStore, null, null)(Login);