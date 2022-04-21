import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Link,
  Typography,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../utils/style';

const theme = createTheme({
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
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>MG Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>MG Shop </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved MG Shop</Typography>
      </footer>
    </>
  );
};
export default Layout;
