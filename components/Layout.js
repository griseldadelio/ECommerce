import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Link,
  Typography,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: 'white',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MG Shop</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>MG Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
