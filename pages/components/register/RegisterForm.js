import React from "react";
import {Form, Header, Button,Message} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {renderInputField} from "../shared/render";



var RegisterForm = ({handleSubmit, submitting, error, invalid}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> New User Registration </Header>

            <Form onSubmit={handleSubmit} className="login-form" noValidate error={!!error} loading= {submitting}>
                <Field name="account"  component={props=>renderInputField({label:"Account name", type:"text", required:true, ...props})}   />


                <Form.Field>
                    <label>Name</label>

                    <Form.Group widths='equal'>
                        <Field name="firstName"  component={props=>renderInputField({label:"", placeholder:"first name", type:"text", ...props})}  />
                        <Field name="lastName" component={props=>renderInputField({label:"", placeholder:"last name", type:"text", ...props})}  />
                    </Form.Group>
                </Form.Field>


                <Form.Field required>
                    <label>Contact</label>

                    <Form.Group widths='equal'>
                        <Field name="email"  component={props=>renderInputField({label:"", placeholder:"email", type:"text", ...props})}  />
                        <Field name="phone" component={props=>renderInputField({label:"", placeholder:"phone",type:"text", ...props})}  />
                    </Form.Group>
                </Form.Field>


                <Field name="password"  component={props=>renderInputField({label:"Password", required:true, type:"password", ...props})}  />

                <Field name="confirmPassword"  component={props=>renderInputField({label:"Confirm password", required:true, type:"password", ...props})}  required />


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

RegisterForm = reduxForm({form: "registerForm"})(RegisterForm);

export default RegisterForm;