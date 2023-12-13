import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contacto1 from "../assets/img/Contacto1.png";
import menu1 from "../assets/img/menu1.png";

function Contacto() {
  return (
    <div className="bg-white">
      <Container style={{ backgroundImage: `url(${menu1})` }}>
        <Row>
          <Col>
            <img src={Contacto1} width="500" height="400" />
          </Col>
          <Col xs={6}>
            <center><h1>Registrate</h1></center>
            <Form>
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder="nombre" />
              <Form.Label>Apellido</Form.Label>
              <Form.Control placeholder="apellido" />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
                <Form.Text className="text-muted">
                  Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
              </Form.Group>
              <Form.Label>Telefono</Form.Label>
              <Form.Control placeholder="telefono" />
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="contraseña" />
              </Form.Group>
              <center>
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </center>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacto;
