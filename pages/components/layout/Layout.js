import React, {Component} from "react";


class Layout extends Component {
    hasSider(children) {
        var value = children || [];
        if (!(value instanceof Array)) {
            return false;
        }

       for(let c of children) {
          if (c.type.displayName === 'Sider') {
              return true;
          }
       }
       return false;
    }


    render() {
        var {children, className} = this.props;
        var style={};
        if (this.hasSider(children)) {
            style["flexDirection"] ="row"
        } else {
            style["flexDirection"] ="column"
        }
        let css=[className, "layout"];


        return (
            <div className={css.join(" ")} style={style}>
                {children}
            </div>
        );
    }
}

const Header = ({children})=> (
    <div className="header">
        {children}
    </div>
);


const Content = ({children})=> (
    <div className="content">
        {children}
    </div>
);



const Sider = ({children})=> (
    <div className="sider">
        {children}
    </div>
);


const Footer = ({children})=> (
    <div className="footer">
        {children}
    </div>
);


export {Layout, Header, Content, Sider, Footer}


