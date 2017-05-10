import React from "react";
import {Form, Header, Button} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";


var LoginForm = ({handleSubmit}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> User Login </Header>

            <Form onSubmit={handleSubmit} className="login-form" noValidate>
                <Field name="account" component={account=>(
                    <Form.Input label="Account" {... account.input} required />
                )}/>

                <Field name="password" component={password=>(
                        <Form.Input label="Password"  {... password.input} type="password" required/>
                    )
                }/>


                <Field name="confirmPassword" component={confirmPassword=> (
                    <Form.Input label="Confirm password" {... confirmPassword.input} type="password" required/>
                )}/>

                <Button className="ui right floated primary button" type="submit">Submit</Button>
            </Form>
        </div>
    )
};

LoginForm = reduxForm({form: "loginForm"})(LoginForm);

export default LoginForm;