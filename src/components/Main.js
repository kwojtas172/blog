import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import posts from "./posts";


class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: posts
        }
        
    }
    
    render() {
        return (
            <>
                <Header />
                <MainContent posts={this.state.posts}/>
            </>
        )
    }
}

export default Main;