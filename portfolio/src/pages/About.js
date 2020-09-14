import React from "react";
import { Container, Jumbotron, Button, Col, Image, Row } from "react-bootstrap";




const styles = {
    h1: {
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Crimson Text, serif",
        fontSize: 50
    },
    container: {
        backgroundImage: "url(/images/background-image-copy-3.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "25px",
        padding: "25px"
    },
    p: {
        // float: "right",
        fontFamily: "Crimson Text, serif",
        textAlign: "center",
        justifyContent: "center",

    },
    button: {
        // justifyContent: "center",
        // textAlign: "center",
        fontFamily: "Crimson Text, serif",
        color: "white"
    },
    img: {
        margin: "3px",
        width: "100%",

    }

};

function About() {
    return (
        <Container style={styles.container}>
            <div>
                <h1 style={styles.h1}>About</h1>
                <hr />
                <Jumbotron >
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <Image src="/images/portfolio-photo-2.jpg" rounded fluid />
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <h1 style={styles.h1}>Jerry Forsberg</h1>
                            <p style={styles.p}>
                                This is a modified jumbotron that occupies the entire horizontal space of
                                its parent.
                            </p>
                            <Row >
                                <Col className="text-center d-flex flex-column">
                                    <Button className="mt-auto" style={styles.button} variant="primary" 
                                    href="#">Learn more</Button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                </Jumbotron>

            </div>
        </Container>
    );
}

export default About;
