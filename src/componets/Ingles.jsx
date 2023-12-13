import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ingles from '../assets/img/ingles.png'
export default function Ingles() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
          <img src={ingles} width="500" height="400"/>
          </Col>
          <Col xs={6}>
            <h1>Aprender inglés es más efectivo cuando es personalizado</h1>
            <p>Creemos que el inglés no se puede aprender de forma masiva. Necesitas la plena atención de un profesor experto.</p>
            <h2>¿Cuánto tiempo me tomará dominar el inglés? Aprendiendo desde cero hasta nivel nativo</h2>
            <p>Aprender inglés necesita tiempo y dedicación. No es cosa de un día, ni existen cursos milagro que te hagan hablar inglés en un mes. Si bien cada persona aprende más o menos rápido, en promedio se necesitan más de 1,000 horas de estudio para aprender el idioma a un nivel nativo avanzado. Conozcamos el tiempo estimado para aprender inglés a detalle.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
