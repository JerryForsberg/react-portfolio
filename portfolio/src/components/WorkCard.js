import React from "react";
import { Carousel, Container } from "react-bootstrap";

const styles = {
  h3: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Crimson Text, serif",
  }
};

function WorkCard() {
  return (
    <div>
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default WorkCard;


{/* <div>
<h3 style={styles.h3}> To see some past projects, please click the images in the carousel below to be taken to deployed versions of the projects. Please note that these are test versions.</h3>
</div>
<Carousel>
<Carousel.Item>
  <a href="https://yuliatikhonova.github.io/Lyrics-To-Go/" >
    <img
      className="d-block w-100"
      src="/images/lyrics-to-go.PNG"
      alt="lyrics to go"
    />
  </a>
  <Carousel.Caption>

  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="/images/handcrafted_heirloom.PNG"
    alt="handcrafted heirloom"
  />

  <Carousel.Caption>

  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <a href=" https://critical-hit-fantasy-character.herokuapp.com/">
    <img
      className="d-block w-100"
      src="/images/critical-hit.PNG"
      alt="Third slide"
    />
  </a>

  <Carousel.Caption>

  </Carousel.Caption>
</Carousel.Item>
</Carousel> */}