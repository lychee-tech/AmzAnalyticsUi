import React from "react";
import {Form, Header, Button} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";


var LoginForm = ({handleSubmit}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> User Login </Header>

            <Form onSubmit={handleSubmit} className="login-form" noValidate>
                <Field name="account" component={(props)=>(
                    <Form.Input label="Account" value={props.input.value}
                                onChange={(param,data) => props.input.onChange(data.value)}
                                placeholder={props.label} required />
                )}/>

                <Field name="password" component={(props)=>(
                    <Form.Input label="Password"  value={props.input.value}
                                onChange={(param,data) => props.input.onChange(data.value)}
                                placeholder={props.label} type="password" required/>
                )}/>


                <Field name="confirmPassword" component={(props)=> (
                    <Form.Input label="Confirm password"  value={props.input.value}
                                onChange={(param,data) => props.input.onChange(data.value)}
                                placeholder={props.label} type="password" required/>
                )}/>

                <Button className="ui right floated primary button" type="submit">Submit</Button>
            </Form>
        </div>
    )
};

LoginForm = reduxForm({form: "loginForm"})(LoginForm);

export default LoginForm;