import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import español from '../assets/img/español.png'
export default function Español() {
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col xs={6}>
            <h1>Learn Spanish for free</h1>
            <h5>Resources for Spanish students</h5>
            <p>
              Learning Spanish is a great experience. Why do you want to learn
              it? Do you plan on travelling to Spain, Mexico, Argentina or
              another Spanish-speaking country? Do you enjoy the Hispanic
              Culture? Do you love languages? Whatever the reason, here you can
              learn Spanish for free. Please, tell your friends about us:
            </p>
            <br />
            <h2>Spanish courses</h2>
            <p>
              This is the best Spanish course in the world… and it’s 100% free!
              Learn Spanish with our lessons. Start from zero and learn new
              words and expressions
            </p>
            <ul>
              <li>Step by step learning.</li>
              <li>From beginner to intermediate.</li>
            </ul>
          </Col>
          <Col>
            <img src={español} width="500" height="400" />
          </Col>
        </Row>
      </Container>
    </>
  );
}