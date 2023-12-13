import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import portugues from '../assets/img/portugues.png'
export default function Portugues() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
          <img src={portugues} width="500" height="400"/>
          </Col>
          <Col xs={6}>
            <h1>Portugués para Jóvenes y Adultos</h1>
            <p>El portugués es uno de los idiomas más relevantes en el continente y ha adquirido una importancia significativa debido al crecimiento de las relaciones políticas y comerciales con Brasil a través de Mercosur. La demanda de profesionales con conocimientos de portugués está en constante aumento.</p>
            <p>En el Curso de Portugués, te ofrecemos una formación completa que no solo te ayudará a dominar el idioma, sino que también te sumergirá en la cultura y las oportunidades que ofrece el mundo de habla portuguesa.</p>
            <h2>Características y beneficios:</h2>
            <ul>
                <li>Metodología 100% participativa: Te sumergirás activamente en el aprendizaje del portugués, lo que acelerará tu progreso y tu capacidad de comunicación</li>
                <li>Pocos alumnos por clase para más interacción: Disfrutarás de clases más personalizadas y participativas, lo que te permitirá practicar y mejorar tus habilidades de manera efectiva.</li>
                <li>Herramientas interactivas y didácticas para un mejor aprendizaje: Aprovecharás recursos de vanguardia que hacen que el aprendizaje del portugués sea más efectivo y atractivo.</li>
                <li>Profesores nativos brasileros: Aprenderás de hablantes nativos, lo que mejorará tu pronunciación y te brindará una comprensión más profunda de la lengua y la cultura brasileña.</li>
                <li>Estándares internacionales: Te prepararás para comunicarte en portugués a nivel internacional, lo que ampliará tus oportunidades profesionales y personales.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}