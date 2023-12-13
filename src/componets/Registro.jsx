import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import menu1 from "../assets/img/menu1.png";

function Registro() {
  return (
    <>
      <Container style={{ backgroundImage: `url(${menu1})` }}>
        <br />
        <center><h1>Inicio de sesion</h1></center>
        <Row>
        <Col xs={3}></Col>
          <Col >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese su Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="contraseña" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
            </Form>
          </Col>

          <Col xs={3}></Col>

        </Row>
      </Container>
    </>
  );
}

export default Registro;
