import React from "react";
import { Card, Button } from "react-bootstrap";

const styles = {
  h3: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Crimson Text, serif",
    background: "black",
    color: "white"
  },
  text: {
    fontFamily: "Crimson Text, serif",
  },

  button: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Crimson Text, serif",
    color: "white"
  }

};


function WorkCard(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <Card style={{ width: '18rem', margin: '15px' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={styles.h3}>{props.title}</Card.Title>
          <Card.Text  className="mb-5"style={styles.text}>
            {props.text}
          </Card.Text>
          <Card.Footer className="text-center d-flex flex-column">
            <Button className="mt-auto" variant="primary" href={props.href} style={styles.button}>{props.title}</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WorkCard;