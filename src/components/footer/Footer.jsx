import './Footer.css'
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <h2>Bebidas y más</h2>
                            <ul>
                                <li><Link to='/catalogo'>Catalogo</Link></li>
                                <li><Link to='/reservas'>Reservas</Link></li>
                                <li><Link to='/'>Inicio</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h2>Ayuda</h2>
                            <ul>
                                <li><Link>Tienda Online</Link></li>
                                <li><Link>Certificaciones</Link></li>
                                <li><Link>Distribuidor</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h2>Nosotros</h2>
                            <ul>
                                <li><Link>About</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>Trabajos</Link></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h2>Legal</h2>
                            <ul>
                                <li><Link>Privacidad</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Col sm={12} className="copyright">© 2023. Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.</Col>
            </div>
        </>
    )
};

export default Footer