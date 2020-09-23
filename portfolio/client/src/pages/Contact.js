import React, { Component } from 'react';
import { Container, Button } from "react-bootstrap";
import axios from "axios";



const styles = {
    h1: {
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Crimson Text, serif",
        fontSize: 50
    },
    container: {
        backgroundImage: `url(/images/background-image-copy-3.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "25px",
        padding: "15px"

    },
    formArea: {
        margin: "auto",
        width: "65%",
        paddingTop: 30,
        paddingLeft: 185
    },
    labelStyle: {
        color: "black",
        fontFamily: "Crimson Text, serif",
        fontSize: "25px"


    },
    button: {
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Crimson Text, serif",
        color: "white"
    }
};

export default class Form extends Component {

    state = {
        name: "",
        email: "",
        message: "",
        sent: false
    }

    //handle input
    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    //end of handle input
    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/contact', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log("message not sent");
            })

    }

    //Resetting the initial data

    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            message: ""
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }


    render() {
        return (
            <Container style={styles.container}>
                <h1 style={styles.h1}>Contact</h1>
                <hr />
                <div style={styles.formArea}>
                    <form className="w-75" onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label style={styles.labelStyle} htmlFor="nameInput">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameInput"
                                placeholder="John Smith"
                                title="Please enter your first and last name"
                                value={this.state.name}
                                onChange={this.handleName}
                                required />
                        </div>
                        <div className="form-group">
                            <label style={styles.labelStyle} htmlFor="emailAddressInput">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailAddressInput"
                                placeholder="name@example.com"
                                title="Please enter your email address"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                required>

                            </input>
                        </div>
                        <div className="form-group">
                            <label style={styles.labelStyle} htmlFor="messageTextAreaInput">Message</label>
                            <textarea
                                className="form-control"
                                id="messageTextAreaInput"
                                rows="5"
                                value={this.state.message}
                                onChange={this.handleMessage}></textarea>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Button type="submit" className="mt-auto" style={styles.button} variant="primary">Contact
                        </Button>
                        </div>

                    </form>
                </div>

            </Container>
        );
    }
}
