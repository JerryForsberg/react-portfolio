import React from "react";
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

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}

export default Contact;