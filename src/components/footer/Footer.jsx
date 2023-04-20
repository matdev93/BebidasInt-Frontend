import { CssBaseline, Box, Typography, Container, Link } from '@mui/material';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      {/* <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
        <Typography variant='h2' component='h1' gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant='body1'>Sticky footer placeholder.</Typography>
      </Container> */}
      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            2023 Creado por Matias Aguila y Cedric Noriega, todos los derechos
            reservados.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
// import { Link } from 'react-router-dom';
// import { Col, Row, Container } from 'react-bootstrap';

// const Footer = () => {
//     return (
//         <>
//             <div>
//                 <Container>
//                     <Row>
//                         <Col sm={3}>
//                             <h2>Bebidas y más</h2>
//                             <ul>
//                                 <li><Link to='/catalogo'>Catalogo</Link></li>
//                                 <li><Link to='/reservas'>Reservas</Link></li>
//                                 <li><Link to='/'>Inicio</Link></li>
//                             </ul>
//                         </Col>
//                         <Col sm={3}>
//                             <h2>Ayuda</h2>
//                             <ul>
//                                 <li><Link>Tienda Online</Link></li>
//                                 <li><Link>Certificaciones</Link></li>
//                                 <li><Link>Distribuidor</Link></li>
//                             </ul>
//                         </Col>
//                         <Col sm={3}>
//                             <h2>Nosotros</h2>
//                             <ul>
//                                 <li><Link>About</Link></li>
//                                 <li><Link>Blog</Link></li>
//                                 <li><Link>Trabajos</Link></li>
//                             </ul>
//                         </Col>
//                         <Col sm={3}>
//                             <h2>Legal</h2>
//                             <ul>
//                                 <li><Link>Privacidad</Link></li>
//                             </ul>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//             <div>
//                 <Col sm={12} className="copyright">© 2023. Todos los derechos reservados. Esta es una página de aterrizaje ficticia para fines académicos.</Col>
//             </div>
//         </>
//     )
// };

// export default Footer
