import {Form, Header, Button,Message} from "semantic-ui-react";


export const renderInputField=({input, placeholder="", type, meta: {touched, error, warning}}) => (
    <Form.Input {...input}  placeholder={placeholder} type={type}   />
);