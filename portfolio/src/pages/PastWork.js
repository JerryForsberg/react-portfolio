import React from "react";
import WorkCard from "../components/WorkCard";

const styles = {
    h1: {
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Crimson Text, serif",
        fontSize: 50
    }
};

function PastWork() {
    return (
        <div>
            <h1 style={styles.h1}>Projects</h1>
            <hr/>
            <WorkCard />
        </div>
    );
}

export default PastWork;