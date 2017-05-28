import React from "react";
import Head from "next/head";
import Link from 'next/link'
import {Menu, Dropdown, Icon} from "semantic-ui-react";
import {Layout, Header, Content, Footer} from "./Layout";


export default ({children})=> (
    <Layout className="page">
        <Head>
            <link rel="stylesheet"
                  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.css"></link>
            <link rel="stylesheet" href="/static/layout.css"></link>
        </Head>


        <Header>
            <Menu pointing className="ui inverted ">
                <div className="ui container">
                    <Menu.Item>
                        <Link href="/">
                            <a> <Icon name="home" size="large"></Icon> </a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name='Amazon account' active={true}/>
                    <Menu.Item name='Dashboard'/>

                    <Menu.Menu position='right'>
                        <Dropdown item icon='wrench' simple>
                            <Dropdown.Menu>
                                <Dropdown.Item> New
                                </Dropdown.Item>
                                <Dropdown.Item>Open</Dropdown.Item>
                                <Dropdown.Item>Save...</Dropdown.Item>
                                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Export</Dropdown.Header>
                                <Dropdown.Item>Share</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item name='Logout'/>
                        <Menu.Item>
                            <Link>
                                <a href="/home"> <Icon name="mail outline"/> </a>
                            </Link>
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