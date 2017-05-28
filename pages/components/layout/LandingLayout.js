import React from "react";
import Head from "next/head";
import Link from "next/link";
import {Menu, Icon, Image} from "semantic-ui-react";
import {Layout, Header, Content, Footer} from "./Layout";



export default ({children}) => (

    <Layout className="page">
        <Head>
            <link rel="stylesheet"
                  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.css"></link>
            <link rel="stylesheet" href="/static/layout.css"></link>
            <link rel="stylesheet" href="/static/vendor/nprogress/nprogress.css"></link>

        </Head>


        <Header>
            <Menu pointing className="ui  inverted" >
                <div className="ui container aligned right">
                    <Menu.Item>
                        <Link href="/">
                            <a> <Icon name="home" size="large"></Icon> </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Link href="/register"> Register </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/login"> Login </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </div>
            </Menu>
        </Header>

        <Content>
            <div className="ui container">
                {children}
            </div>
        </Content>


        <Footer className="ui inverted main footer segment">
            <div className="ui container center">
                footer
            </div>

        </Footer>
    </Layout>


)
