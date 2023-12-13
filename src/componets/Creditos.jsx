import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import creditos from '../assets/img/creditos.png'
export default function Creditos() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
          <img src={creditos} width="500" height="400"/>
          </Col>
          <Col xs={6}>
            <h1>Pagina creada por:</h1>
            <h1>Daniel Torrez</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}