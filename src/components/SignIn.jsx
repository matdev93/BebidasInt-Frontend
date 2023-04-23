import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { useContext, useState } from 'react';
import UserContext from '../context/user/UserContext';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);
  const { loginUser, registerUser } = useContext(UserContext);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  console.log(`Este es el estado de signUp: ${signUp}`);

  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (signUp) {
      registerUser(user);
    } else {
      loginUser(user);
    }

    setUser(initialValues);
    navigate('/');
  };

  const changeMode = () => {
    setSignUp(!signUp);
    setUser(initialValues);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component='h1' variant='h5'>
            {signUp ? 'Sign up' : 'Sign in'}
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {signUp && (
              <TextField
                margin='normal'
                required
                id='name'
                fullWidth
                autoFocus
                onChange={handleChange}
                type='text'
                placeholder='Juan Perez'
                name='name'
                label='name'
                value={user.name}
              />
            )}
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={handleChange}
              value={user.email}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={handleChange}
              value={user.password}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              {signUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item>
                <Button onClick={changeMode}>
                  {signUp
                    ? 'Already have an account? Sign In'
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
