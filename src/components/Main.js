import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import posts from "./posts";


class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: posts,
            page: ""
        }
        
    }
    
    render() {
        return (
            <>
                <Header />
                <MainContent posts={this.state.posts}/>
                <Footer />
            </>
        )
    }
}

export default Main;