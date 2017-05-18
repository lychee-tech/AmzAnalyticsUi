import {Input} from "semantic-ui-react";


const renderError = (error) => {
    console.log(error);

    return (!!error && error.indexOf("is required") < 0 ) ? (
        <div className="ui  pointing  up red basic label">
            {error}
        </div>
    ) : "";
};

export const renderInputField = ({input, placeholder = "", type, meta: {touched, error, warning}}) => (
    <div  className="field">
        <Input {...input} placeholder={placeholder} type={type}/>
        {renderError(error)}
    </div>
);