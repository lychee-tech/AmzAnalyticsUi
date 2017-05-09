import React , {Component} from "react";
import LandingLayout from "./components/layout/LandingLayout";

import NProgress from "nprogress";

class Index extends Component {
    componentWillMount(){
       if(process.browser) {
           NProgress.start();
       }
    }

    componentDidMount(){
        NProgress.done();

    }
    render() {
        return (
            <LandingLayout>

                this is the landing page

            </LandingLayout>
        )
    }
}


export default Index;