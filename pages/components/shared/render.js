import {Input} from "semantic-ui-react";


const renderError = (error, touched) => {
    return (!!error && touched) ? (
        <div className="ui red text">
            {error}
        </div>
    ) : "";
};

export const renderInputField = ({input, placeholder = "", type, meta: {touched, error, warning}}) => {

    return (

        <div className="field">
            <Input {...input} placeholder={placeholder} type={type}/>
            {renderError(error, touched)}
        </div>
    )
};