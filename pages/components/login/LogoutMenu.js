import fetch from 'unfetch';
import Router from "next/router";
import {Menu} from "semantic-ui-react";



function submitLogout(){
    return fetch("/login", {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ hungry: true })
    }).then(function(response) {
        if (response.ok) {
            Router.push("/");
        }
    });
}


const LogoutMenu =  ()=> {
    return (
     <Menu.Item name="logout">
         <a href="javascript: void(0);" onClick={submitLogout}>
             Logout
         </a>
    </Menu.Item>

    )
};

export default LogoutMenu;