import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import menu1 from "../assets/img/menu1.png";

const Navbar = () => {
  return (
    <>
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundImage: `url(${menu1})` }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Instituto de aprendizaje de Idiomas
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Registro">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contactanos">
                    Contactanos
                  </Link>
                </li>
                <li>
                  <NavDropdown title="Idiomas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/ingles">Ingles</NavDropdown.Item>
                    <NavDropdown.Item href="/español">Español</NavDropdown.Item>
                    <NavDropdown.Item href="/frances">Frances</NavDropdown.Item>
                    <NavDropdown.Item href="/chino">Chino</NavDropdown.Item>
                    <NavDropdown.Item href="/portugues">
                      Portugues
                    </NavDropdown.Item>
                  </NavDropdown>
                  <li class="nav-item"></li>
                </li>
                <Link class="nav-link" to="/creditos">
                    Creditos
                  </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
