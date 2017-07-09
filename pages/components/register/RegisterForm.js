import React from "react";
import {Form, Header, Button,Message} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {renderInputField} from "../shared/render";

import {required} from "../shared/validation/stringValidator";
import {email, phone} from "../shared/validation/contactValidator";
import {confirmPasswordMatchPassword} from "../shared/validation/passwordValidator";

var RegisterForm = ({handleSubmit, submitting, error, invalid}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> New User Registration </Header>

            <Form onSubmit={handleSubmit} className="register-form" noValidate error={!!error}  loading= {submitting}>

                <Form.Field required>
                    <label>Email</label>
                    <Field name="email" type="text" component={renderInputField} validate={[required, email]}  />
                </Form.Field>


                <Form.Field required>
                    <label>Password</label>
                    <Field name="password"   type="password" component={renderInputField}      validate={[required]} />
                </Form.Field>


                <Form.Field required>
                    <label>Confirm password</label>
                    <Field name="confirmPassword"  type="password" component={renderInputField} validate={[required, (value, values)=>confirmPasswordMatchPassword(values["password"], values["confirmPassword"])]} />
                </Form.Field>


                <Message
                    error
                    content={error}
                />

                <Form.Field className="ui right aligned">
                    <Button  disabled={submitting || invalid} primary={true} type="submit">Submit</Button>
                </Form.Field>

            </Form>

        </div>
    )
};

RegisterForm = reduxForm({form: "registerForm"})(RegisterForm);

export default RegisterForm;