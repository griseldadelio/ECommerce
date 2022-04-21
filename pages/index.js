import Layout from '../components/Layout';
import { Head, Image } from 'next';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from '@material-ui/core';
import NextLink from 'next/link';
import data from '../utils/data';

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>MG Shop</title>
        <meta name="description" content="e-Commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>*/}
      <Layout>
        <div>
          <h1>Products</h1>
          <Grid container spacing={3}>
            {data.products.map((product) => (
              <Grid item md={4} key={product.name}>
                <Card>
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}
                        title={product.title}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>${product.price} </Typography>
                    <Button size="small" color="primary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Layout>
    </>
  );
};
export default Home;
