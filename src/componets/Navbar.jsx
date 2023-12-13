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
            <Link
              class="nav-link active navbar-brand"
              aria-current="page"
              to="/"
            >
              Instituto de aprendizaje de Idiomas
            </Link>
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
                    <NavDropdown.Item>
                      <Link class="nav-link" to="/Ingles">
                        Ingles
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link class="nav-link" to="/Español">
                        Español
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link class="nav-link" to="/Frances">
                        Frances
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link class="nav-link" to="/Chino">
                        Chino
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link class="nav-link" to="/Portugues">
                        Portugues
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <li class="nav-item"></li>
                </li>
                <Link class="nav-link" to="/creditos">
                  Creditos
                </Link>
                <li class="nav-item">
                  <Link class="nav-link" to="/galeria">
                    Video de idiomas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
