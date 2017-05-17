import React, {Component} from "react";
import {initStore} from "./components/register/store";
import withRedux from "next-redux-wrapper";
import LandingLayout from "./components/layout/LandingLayout";
import RegisterForm from "./components/register/RegisterForm";

import {SubmissionError} from "redux-form"

import NProgress from "nprogress";


var submit = (value)=> {
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            reject(new SubmissionError({_error: 'registration failed' }));
        }, 1000)
    })
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