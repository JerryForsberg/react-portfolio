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
        fontSize: 20

    },
    button: {
        // justifyContent: "center",
        // textAlign: "center",
        fontFamily: "Crimson Text, serif",
        color: "white"
    },
    img: {
        height: "50px",
        marginRight: "10px"
        
    }
  

};

function About() {
    return (
        <Container style={styles.container}>
            <div>
                <h1 style={styles.h1}>About Me</h1>
                <hr />
                <Jumbotron >
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <Image src="/images/portfolio-photo-2.jpg" rounded fluid />
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <h1 style={styles.h1}>Jerry Forsberg</h1>
                            <p style={styles.p}>
                                I am a full stack Web Developer, driven to grow and learn, as well as create. I am looking for an opportunity that will challenge me, and offer some level of support and patience as I continue to improve as a developer.
                                <br /><br/>
                                I think of myself as someone who takes initiative and accountability, and is always open to constructive criticism. 
                                <br /><br />
                                I have completed a certification program in full stack development from University of Arizona, where I gained experience in several technologies, including:
                                <br />
                                - html, css, bootstrap, React.js, Node.js, Express.js MongoDB, mySQL, RESTful API and more.
                                <br /><br/>
                                To learn more about me, or to get in touch, please click the links below:

                                <br /><br />
                                <a href="https://github.com/JerryForsberg">
                                <Image style={styles.img} src="/images/iconmonstr-github-1-240.png" rounded fluid />
                                </a>
                                <a href="https://www.linkedin.com/in/jerry-forsberg-005181139/">
                                <Image style={styles.img} src="/images/iconmonstr-linkedin-3-240.png" rounded fluid />
                                </a>
                                <a href="/images/Jerry's Resume (1).pdf">
                                <Image style={styles.img} src="/images/noun_Resume_3517226.png" rounded fluid />
                                </a>
                                
                                

                                
                            </p>
                            <Row >
                                <Col className="text-center d-flex flex-column">
                                    <Button className="mt-auto" style={styles.button} variant="primary" 
                                    href="/past_work">See Past Work</Button>
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
