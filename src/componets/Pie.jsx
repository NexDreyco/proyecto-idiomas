import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Pagina aun no terminada se agradece su comprension.</h5>

            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Espacio reservado para publicidad</h5>
                <ul className="list-unstyled">
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Siguenos en:</h5>
                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='d-flex justify-content-betwen'>
                        <ol><i class="bi bi-whatsapp"></i></ol>
                        <ol><i className="bi bi-facebook"></i></ol>
                        <ol><i class="bi bi-twitter"></i></ol>    
                        <ol><i class="bi bi-youtube"></i></ol>            
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>

export default Footer