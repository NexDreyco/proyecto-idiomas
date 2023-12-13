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
    </>
  );
};

export default Inicio;
