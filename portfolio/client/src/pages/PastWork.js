import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WorkCard from "../components/WorkCard";
import projects from "../projects.json";




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
    }
   
};
class PastWork extends Component {
    state = {
        projects
    };

    render() {
        return (
            <Container style={styles.container}>
            
                <h1 style={styles.h1}>Projects</h1>
                <hr />
                <div className="row">
                    {this.state.projects.map(project => (
                        <WorkCard
                            id={project.id}
                            key={project.id}
                            title={project.title}
                            image={project.image}
                            text={project.text}
                            href={project.href} />
                    ))}
                
                
            </div>
            </Container>
            
           
        );
    }
}

export default PastWork;