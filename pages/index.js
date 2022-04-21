import Head from 'next/head';
import Layout from '../components/Layout';
import { Typography } from '@material-ui/core';
const Home = () => {
  return (
    <>
      {/* <Head>
        <title>MG Shop</title>
        <meta name="description" content="e-Commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>*/}
      <Layout>
        <h1>Products</h1>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </Layout>
      <footer>
        <Typography>All rights reserved MG Shop</Typography>
      </footer>
    </>
  );
};
export default Home;
