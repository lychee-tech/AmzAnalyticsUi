import React from "react";
import {Form, Header, Button} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";


var LoginForm = ({handleSubmit}) => {
    return (
        <div>
            <Header as='h2' className="center aligned"> User Login </Header>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
};

LoginForm = reduxForm({form: "loginForm"})(LoginForm);

export default LoginForm;