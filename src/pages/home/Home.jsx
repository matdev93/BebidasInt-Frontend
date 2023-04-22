import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='hero-container'>
        <h1>DISFRUTA DE NUESTRAS BEBIDAS</h1>
        <p>Conoce nuestro catálogo y haz tu pedido</p>
        <p>Aceptamos todo medio de pago</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            href='/products'
          >
            VER CATÁLOGO
          </Button>
        </div>
      </div>
      <Col>
        <div className='tarjetas'>
          <Col style={{ textAlign: 'center' }}>
            <br></br>
            <h1>Revisa nuestros productos</h1>
          </Col>
          <Container>
            <Row className='justify-content-md-center p-5'>
              <Col xs lg='3'>
                <Card style={{ width: '18rem', height: '31rem' }}>
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  />
                  <Card.Body>
                    <Card.Title>Bebidas</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique exercitationem aliquid vitae, excepturi optio,
                      vero ipsam quia at tenetur omnis fugit assumenda eaque,
                      soluta nam sequi ratione itaque corrupti temporibus!
                    </Card.Text>
                    <Button variant='info'>
                      <Link to='/products'>Ir a catalogo</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs lg='1'></Col>
              <Col xs lg='3'>
                <Card style={{ width: '18rem', height: '31rem' }}>
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1606337006669-a4b90367192b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  />
                  <Card.Body>
                    <Card.Title>Jugos</Card.Title>
                    <Card.Text>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum ut a voluptatibus dolore ullam tempore voluptates at
                      atque eaque enim facere laborum deleniti harum aliquam
                      saepe, reprehenderit laboriosam natus sapiente!
                    </Card.Text>
                    <Button variant='info'>
                      <Link to='/products'>Ir a catalogo</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs lg='1'></Col>
              <Col xs lg='3'>
                <Card style={{ width: '18rem', height: '31rem' }}>
                  <Card.Img
                    variant='top'
                    src='https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                  />
                  <Card.Body>
                    <Card.Title>Te Helado y más</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Provident, facere! Minima culpa veritatis nemo velit
                      dolores enim architecto porro cum, ut debitis libero ipsum
                      dolore earum molestias reprehenderit adipisci eveniet.
                    </Card.Text>
                    <Button variant='info'>
                      <Link to='/products'>Ir a catalogo</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Col>
    </div>
  );
};

export default Home;
