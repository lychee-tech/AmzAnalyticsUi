import React, {Component} from "react";
import {initStore} from "./components/login/store";
import withRedux from "next-redux-wrapper";
import LandingLayout from "./components/layout/LandingLayout";
import LoginForm from "./components/login/LoginForm";


var submit = (values)=> {
    console.log(values)
};


class Login extends Component {

    render() {
        return (
            <LandingLayout>
                <LoginForm onSubmit={submit}/>
            </LandingLayout>
        )
    }
}


export default withRedux(initStore, null, null)(Login);