import React from "react";
import {Form, Header, Button,Message} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {validateAccount, validatePassword} from "./validators";
import {renderInputField} from "../shared/render";



var LoginForm = ({handleSubmit, submitting, error, invalid}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> User Login </Header>

            <Form onSubmit={handleSubmit} className="login-form" noValidate error={!!error} loading= {submitting}>

                <Form.Field>
                    <label>Account </label>
                    <Field name="account" type="text" component={renderInputField}  validate={validateAccount}/>
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <Field name="password" type="password" component={renderInputField} validate={validatePassword} />
                </Form.Field>


                <Message
                    error
                    content={error}
                />


                <Form.Field className="ui right aligned">
                    <Button  disabled={submitting || invalid} className="ui  primary button" type="submit">Submit</Button>
                </Form.Field>

            </Form>

        </div>
    )
};

LoginForm = reduxForm({form: "loginForm"})(LoginForm);

export default LoginForm;