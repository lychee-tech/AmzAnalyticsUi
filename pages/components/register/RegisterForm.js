import React from "react";
import {Form, Header, Button,Message} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {renderInputField} from "../shared/render";

import {validateAccount, validateEmail, validatePhone,validatePassword, validateConfirmPassword} from "./validators";

var RegisterForm = ({handleSubmit, submitting, error, invalid}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> New User Registration </Header>

            <Form onSubmit={handleSubmit} className="register-form" noValidate error={!!error}  loading= {submitting}>

                <Form.Field required>
                    <label>Account</label>
                    <Field name="account" label="Account name" type="text" component={renderInputField} validate={validateAccount}  />
                </Form.Field>


                <Form.Field>
                    <label>Name</label>

                    <Form.Group widths='equal'>
                        <Field name="firstName" placeholder="first name" type="text" component={renderInputField}  />
                        <Field name="lastName" placeholder="last name"  type="text" component={renderInputField}  />
                    </Form.Group>
                </Form.Field>


                <Form.Field required>
                    <label>Contact</label>

                    <Form.Group widths='equal'>
                        <Field name="email"  placeholder="email" type="text"  component={renderInputField}  validate={(value,values)=>validateEmail(values['email'], values['phone'])} />
                        <Field name="phone"  placeholder="phone" type="phone" component={renderInputField}  validate={(value,values)=>validatePhone(values['email'], values['phone'])} />
                    </Form.Group>
                </Form.Field>


                <Form.Field required>
                    <label>Password</label>
                    <Field name="password"   type="password" component={renderInputField}      validate={validatePassword} />
                </Form.Field>


                <Form.Field required>
                    <label>Confirm password</label>
                    <Field name="confirmPassword"  type="password" component={renderInputField} validate={(value, values)=>validateConfirmPassword(values["password"], values["confirmPassword"])} />
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