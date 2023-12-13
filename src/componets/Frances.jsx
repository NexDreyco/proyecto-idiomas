import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import frances from '../assets/img/frances.png'
export default function Frances() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
          <img src={frances} width="500" height="500"/>
          </Col>
          <Col xs={6} >
            <h1>Francés para Jóvenes y Adultos</h1>
            <p>A través de nuestro programa de estudio, los estudiantes podrán comunicarse en una de las lenguas romances presente en los cinco continentes y abrir las puertas a más oportunidades que vienen al desarrollar sus competencias lingüísticas en francés.</p>
            <h3>¡Aprender francés en nunca fue más fácil!</h3>
            <h2>Caracteristicas</h2>
            <ul>
                <li>Clases Presenciales y Online.</li>
                <li>Metodología 100% participativa.</li>
                <li>Seguimiento personalizado de la evolución del alumno.</li>
                <li>Pocos participantes por clases para mayor interacción.</li>
                <li>Formación a través de videoconferencias con un docente especializado.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}