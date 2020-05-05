import React from "react";


class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            display: "none"
        }
        
    }
    
    

    showMenu = () => {
        this.setState({
            display: this.state.display === "none" ? "block" : "none"
        })
    }

    
    render() {
        return (
           <header className="header-content">
               <h1 className="header-content_header-title" id="home">Blog</h1>
               <nav className="header-content_header-nav">
                   <ul className="header-content_header-nav_menu" style={{display: window.innerWidth < 720 ? this.state.display : "flex"}}>
                       <li><a href="#home">Home</a></li>
                       <li><a href="#aboutus">About Us</a></li>
                       <li><a href="#posts">Posts</a></li>
                       <li><a href="#contact">Contact</a></li>
                   </ul>
                   <div className="header-content_header-nav_show-menu" style={{display: window.innerWidth < 720 ? "block" : "none"}} onClick={this.showMenu}>
                    </div>
               </nav>
               
           </header>
        )
    }
}


export default Header;