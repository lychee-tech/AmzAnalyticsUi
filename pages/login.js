import React,{Component} from "react";
import LandingLayout from "./components/layout/LandingLayout";
import {Form,Header,Button} from "semantic-ui-react";

import {initStore} from "./components/login/store";
import withRedux from 'next-redux-wrapper'
import { Field, reduxForm } from 'redux-form'


class Login extends Component {
    render () {
      return (
          <LandingLayout>

              <div>
                  <Header as='h2' className="center aligned"> User Login </Header>

                  <Form className="login-form">
                      <Form.Input label="Account name" />

                      <Form.Input label="Password" type="password" />

                      <Form.Input label="Confirm password" type="password" />

                      <Button className="ui right floated primary button">Submit</Button>
                  </Form>
              </div>

          </LandingLayout>
      )
    }
}

export default withRedux(initStore, null, null)(Login);