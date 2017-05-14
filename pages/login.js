import React, {Component} from "react";
import {initStore} from "./components/login/store";
import withRedux from "next-redux-wrapper";
import LandingLayout from "./components/layout/LandingLayout";
import LoginForm from "./components/login/LoginForm";

import {SubmissionError} from "redux-form"

import NProgress from "nprogress";


var submit = (value)=> {
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject(new SubmissionError({_error: 'Can not find the account and password combination' }));
        }, 1000)
    })
};


class Login extends Component {
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
                <LoginForm onSubmit={submit}/>
            </LandingLayout>
        )
    }
}


export default withRedux(initStore, null, null)(Login);