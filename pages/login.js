import React from "react";
import LandingLayout from "./components/layout/LandingLayout";
import {Form,Header,Button} from "semantic-ui-react";



export default  () => (
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