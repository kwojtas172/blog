import React from "react";
// import nextId from "react-id-generator";

class Post extends React.Component {
    render() {
        return (
            <article className="main-content_sect-posts_post">
                <h3 className="main-content_sect-posts_post_title">{this.props.post.title}</h3>
                <img className="main-content_sect-posts_post_img" alt={this.props.post.title} src={this.props.post.img}></img>
                <p className="main-content_sect-posts_post_text">{this.props.post.content}</p>
                <span className="main-content_sect-posts_post_additional">
                    author: {this.props.post.author}, date: {this.props.post.date}
                </span>
            </article>
        )
    }
}

export default Post;