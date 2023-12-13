import React from "react";
import Carousel from "react-bootstrap/Carousel";
import panel1 from "../assets/img/panel1.jpg";
import panel2 from "../assets/img/panel2.jpg";
import panel3 from "../assets/img/panel3.jpg";

const Inicio = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={panel1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={panel2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={panel3} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <center>
        <h1>Aprender idiomas nunca fue tan facil!!!</h1>
        <br />
        <h3>Aprende más con ayuda</h3>
        <p>No te quedes en los libros de texto: da un paso más y practica la pronunciación, aprende nociones culturales<br/> e intercambia consejos sobre los idiomas que dominas con nuestra comunidad internacional de estudiantes.</p>
        <h3>Aprende con confianza</h3>
        <p>Progresa y consigue resultados reales. Prepárate para interactuar en el mundo real sentando unas bases sólidas <br />gracias a la práctica de tus competencias de comprensión y expresión orales y escritas.</p>
        <h3>Aprende para la vida real</h3>
        <p>Despídete de las expresiones que nadie utiliza y desarrolla las competencias que te llevarán lejos. Aprende <br /> idiomas a diario con contenidos actualizados con frecuencia, fichas de vídeo con personas de carne y hueso y <br />nociones culturales útiles.</p>
        <h3>Aprende a tu manera</h3>
        <p>Con independencia del motivo por el que aprendas un idioma, puedes contar con nosotros. Alcanza tus objetivos con <br />cursos simplificados y lecciones breves, pero eficaces. Tú llevas las riendas.</p>
      </center>

    </>
  );
};

export default Inicio;
