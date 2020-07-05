import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Posts from "./components/posts";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello world</h1>
          <Posts />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
