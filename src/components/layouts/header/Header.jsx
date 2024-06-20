import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.white,
  '&.active': {
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Box>
          <Button color="inherit">
            <StyledNavLink to="/" activeClassName="active">
              Home
            </StyledNavLink>
          </Button>
          <Button color="inherit">
            <StyledNavLink to="/login" activeClassName="active">
              Login
            </StyledNavLink>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
