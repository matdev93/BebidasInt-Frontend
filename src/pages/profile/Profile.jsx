import UserContext from '../../context/user/UserContext';
import { useContext, useState, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Container,
  Modal,
  TextField,
} from '@mui/material';

const Profile = () => {
  const { infoUser, userEdit } = useContext(UserContext);

  const { name, email, age } = infoUser;

  const [open, setOpen] = useState(false);

  const [userForm, setUserForm] = useState({
    name: '',
    age,
    email,
  });

  const handleChange = async (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {
    userEdit(userForm);
  };

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        name,
        email,
        age,
      });
    };

    updateData();
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '140px',
        }}
      >
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 250, width: 500 }}
            image='https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            title='perro'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h4'
              component='div'
              align='center'
            >
              {`${name}`}
            </Typography>
            <Typography variant='h6' color='text.secondary' align='center'>
              {email}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleOpen}>Edit User</Button>
            <Button size='small'>Advanced Config</Button>
          </CardActions>
        </Card>
      </Container>
      <div>
        <Box
          component='form'
          onSubmit={(e) => sendData(e)}
          display={!open ? 'none' : 'flex'}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '45ch' },
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: '20px',
            marginBottom: '40px',
          }}
          noValidate
          autoComplete='off'
        >
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            align='center'
          >
            Edita tu usuario!
          </Typography>
          <TextField
            id='outlined-disabled'
            label='Name'
            value={userForm.name}
            name='name'
            onChange={handleChange}
            type='text'
          />
          <TextField
            id='outlined-disabled'
            label='Age'
            value={userForm.age}
            type='number'
            onChange={handleChange}
            name='age'
          />
          <TextField
            id='outlined-disabled'
            label='Email'
            value={userForm.email}
            type='email'
            onChange={handleChange}
            name='email'
          />
          <Button type='submit'>Send</Button>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
