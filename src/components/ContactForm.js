import React from "react";


class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            text: "",
            value: false,
            nameValue: false,
            emailValue: false,
            textValue: false
        }

    }

    changeName = e => {
        this.setState({
            name: e.target.value
        })
    }

    changeEmail = e => {
        this.setState({
            email: e.target.value
        })
    }

    changeText = e => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            value: false,
            nameValue: false,
            emailValue: false,
            textValue: false
        })
        if(this.state.name.length>2 && this.state.email.length>2 && this.state.email.indexOf("@") !=-1 && this.state.text.length>2) {
            this.setState({
                value: true,
                name: "",
                email: "",
                text: ""
            })
        }
        if(this.state.name.length<=2) {
            this.setState({
                nameValue: true
            })
        }
        if(this.state.email.length<=2 || this.state.email.indexOf("@") === -1) {
            this.setState({
                emailValue: true
            })
        }
        if(this.state.text.length<=2) {
            this.setState({
                textValue: true
            })
        }
    }

    render() {
        return (
            <form className="main-content_sect-contact_form" id="contact" onSubmit={this.onSubmit}>
                <label>
                    <h4>Formularz kontaktowy</h4>
                    {this.state.value && <h5 className="good">Formularz wysłany, dziękuję!</h5>}
                    {this.state.nameValue && <h5 className="bad">Imię musi zawierać co najmniej 3 znaki!</h5>}
                    {this.state.emailValue && <h5 className="bad">Adres e-mail musi zawierać co najmniej 3 znaki oraz "@"!</h5>}
                    {this.state.textValue && <h5 className="bad">Pole z wiadomością musi zawierać co najmniej 3 znaki!</h5>}
                    <input type="text" placeholder="Wpisz imię" value={this.state.name} onChange={this.changeName} ></input>
                    <input type="email" placeholder="Wpisz e-mail" value={this.state.email} onChange={this.changeEmail} ></input>
                    <textarea placeholder="Wpisz wiadomość" value={this.state.text} onChange={this.changeText} />
                    <input type="submit" value="Wyślij" />
                </label>
            </form>
        )
    }
}

export default ContactForm