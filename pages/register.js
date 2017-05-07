import React from "react";
import LandingLayout from "./components/layout/LandingLayout";
import {Form,Header,Button} from "semantic-ui-react";

export default  () => (
    <LandingLayout>
        <div>
            <Header as='h2' className="center aligned"> New User Registration </Header>

            <Form className="register-form">
                <Form.Input label="Account name" required/>

                <Form.Field required>
                    <label>Name</label>

                    <Form.Group widths='equal'>
                        <Form.Input  placeholder='First name' />
                        <Form.Input  placeholder='Last name' />
                    </Form.Group>
                </Form.Field>

                <Form.Field required>
                    <label> Contact </label>
                    <Form.Group widths='equal'>
                        <Form.Input  placeholder='Email' />
                        <Form.Input  placeholder='Phone' />
                    </Form.Group>
                </Form.Field>

                <Form.Input label="Password" type="password" required/>

                <Form.Input label="Confirm password" type="password" required/>


                <Button className="ui right floated primary button">Submit</Button>
            </Form>

        </div>


    </LandingLayout>

)