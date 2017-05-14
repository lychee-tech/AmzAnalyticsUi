import React from "react";
import {Form, Header, Button,Message} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {validateAccount, validatePassword} from "./validator";
import {renderInputField} from "../shared/render";



var LoginForm = ({handleSubmit, submitting, error, invalid}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> User Login </Header>

            <Form onSubmit={handleSubmit} className="login-form" noValidate error={!!error} loading= {submitting}>
                <Field name="account" l component={props=>renderInputField({label:"Account", type:"text", ...props})}  validate={validateAccount}/>

                <Field name="password" component={(props)=>renderInputField({label:"Password", type:"password", ...props})} validate={validatePassword} />


                <Message
                    error
                    content={error}
                />

                <Form.Field>
                    <Button  disabled={submitting || invalid} className="ui right floated  primary button" type="submit">Submit</Button>
                </Form.Field>


            </Form>

        </div>
    )
};

LoginForm = reduxForm({form: "loginForm"})(LoginForm);

export default LoginForm;