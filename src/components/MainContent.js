import React from "react";
import Post from "./Post";
import nextId from "react-id-generator";
import ContactForm from "./ContactForm";

class MainContent extends React.Component {

    render() {
        return (
            <main className="main-content">
                <section className="main-content_sect-about" id="aboutus">
                    <h2 className="main-content_sect-about_title">About Us</h2>
                    <img className="main-content_sect-about_img" alt="about us" src="dist/images/aboutus.jpg"></img>
                    <p className="main-content_sect-about_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, magnam tempore. Perspiciatis, voluptatem. Distinctio, recusandae, placeat eos quas laudantium, illo voluptas aspernatur corrupti nostrum sunt nam nesciunt necessitatibus temporibus praesentium?
                        Magnam velit alias deserunt harum cum neque culpa dolores ea quaerat vitae mollitia quae ab optio, totam, nihil animi nemo placeat omnis assumenda rem sed? Laboriosam nam ea facere enim?
                        Rerum accusantium cumque voluptatibus dolorem minus ipsa fuga accusamus praesentium natus ab repellendus reprehenderit eos eum, ea quaerat laborum! Praesentium nostrum saepe tenetur, perferendis asperiores illo nemo enim reprehenderit qui.
                        Enim provident tempore esse impedit iure? Quo dolorem nemo fuga eos aliquid nam iure nisi asperiores. Laudantium soluta aliquam magni itaque dicta ea ad at tempore magnam deleniti? Ea, tempora?
                        Eaque consequatur eum perspiciatis autem, expedita nemo, cumque eius impedit quasi debitis doloribus atque laudantium ipsam. Magnam quidem corporis nisi dolorem tenetur similique adipisci mollitia, ut, beatae, et nulla quae.
                    </p>
                </section>
                <section className="main-content_sect-posts" id="posts">
                    {this.props.posts.map(post => {
                        return <Post key={nextId()} post={post}/>
                    })}
                </section>
                <section className="main-content_sect-contact">
                    <ContactForm />
                </section>
            </main>
        )
    }
}

export default MainContent;