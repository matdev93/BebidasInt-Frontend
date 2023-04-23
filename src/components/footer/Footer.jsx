import { CssBaseline, Box, Typography, Container, Link } from '@mui/material';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' style={{ textAlign: 'center'}}>
      {'Copyright © '}
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
        minHeight: '40vh',
      }}
    >
      <CssBaseline />
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
          <Typography variant='body1' style={{ textAlign: 'center'}}>
          {new Date().getFullYear()} Creado por Matias Aguila y Cedric Noriega, todos los derechos
            reservados.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
