import React from "react";
import {Form, Header, Button,Message} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";


var LoginForm = ({handleSubmit, submitting, error}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> User Login </Header>

            <Form onSubmit={handleSubmit} className="login-form" noValidate error={error} loading= {submitting}>
                <Field name="account" component={ account=>(
                    <Form.Input label="Account" {... account.input}  />
                )}/>

                <Field name="password" component={ password=>(
                        <Form.Input label="Password"  {... password.input} type="password" />
                    )
                }/>


                <Message
                    error
                    content='Incorrect account and password combination'
                />

                <Form.Field>
                    <Button  disabled={submitting} className="ui right floated  primary button" type="submit">Submit</Button>
                </Form.Field>


            </Form>



        </div>
    )
};

LoginForm = reduxForm({form: "loginForm"})(LoginForm);

export default LoginForm;