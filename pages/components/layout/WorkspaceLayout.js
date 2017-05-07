import React from "react";
import Head from "next/head";
import Link from 'next/link'
import {Menu, Dropdown, Icon} from "semantic-ui-react";

export default ({children})=> (
    <div className="canvas">
        <Head>
            <link rel="stylesheet"
                  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.css"></link>
            <link rel="stylesheet" href="/static/layout.css"></link>
        </Head>

        <Menu pointing className="ui inverted main" fixed="top">
            <div className="ui container">
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


        <div className="ui container main content">
            {children}
        </div>

        <div className="ui inverted main footer segment">
            <div className="ui container">
                footer
            </div>
        </div>

    </div>

)