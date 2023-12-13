import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chino from '../assets/img/chino.png'
export default function Chino() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col xs={6}>
            <h1>Curso de chino mandarin desde cero</h1>
            <p>¿Se ha sentido frustrado al tratar de aprender chino?  si quieres aprender chino mandarin desde cero ahora.  aqui tienes una opción que es tan bueno para usted.  selciona este curso ahora.  abre la puerta para aprender chino mandarin ahora.</p>
            <br />
            <p>En este curso te acompañaremos en tu aprendizaje del chino, para que aprendas poco a poco el idioma y luego, si lo deseas, introducirte en el examen.</p>
            <br />
            <p>Nuestro profesor de chino te guiará cuidadosamente para que la comprensión de todos los conceptos gramaticales y culturales del idioma sea más fácil que nunca.</p>
            <h2>Caracteristicas:</h2>
            <ul>
                <li>Puedes aprender al menos 150 palabras y 4 tiempos.</li>
                <li>Puedes entender la sistema de Pinyin pronunciation.</li>
                <li>Puedes aprender como escribir al menos 100 caracteres chinos.</li>
                <li>Puedes hablar con los chinos básicas conversaciones.</li>
            </ul>
          </Col>
          <Col>
          <img src={chino} width="500" height="400"/>
          </Col>
        </Row>
      </Container>
    </>
  );
}