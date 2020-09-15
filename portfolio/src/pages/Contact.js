import React from 'react';
import { Container, Button } from "react-bootstrap";


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
const contact = () => {
    return (
        <Container style={styles.container}>
            <h1 style={styles.h1}>Contact</h1>
            <hr />
            <div style={styles.formArea}>
                <form class="w-75">
                    <div class="form-group">
                        <label style={styles.labelStyle} for="nameInput">Name</label>
                        <input type="text" class="form-control" id="nameInput" placeholder="John Smith"
                            title="Please enter your first and last name"></input>
                    </div>
                    <div class="form-group">
                        <label style={styles.labelStyle} for="emailAddressInput">Email</label>
                        <input type="email" class="form-control" id="emailAddressInput" placeholder="name@example.com"
                            title="Please enter your email address"></input>
                    </div>
                    <div class="form-group">
                        <label style={styles.labelStyle} for="messageTextAreaInput">Message</label>
                        <textarea class="form-control" id="messageTextAreaInput" rows="5"></textarea>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Button className="mt-auto" style={styles.button} variant="primary" href="#">Contact
                        </Button>
                    </div>

                </form>
            </div>

        </Container>
    )
}
export default contact