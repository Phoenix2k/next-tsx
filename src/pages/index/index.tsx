import Head from 'next/head';
import DefaultLayout from '../../layouts/Default';

const Home = (): JSX.Element => (
  <DefaultLayout>
    <Head>
      <title>Home page</title>
      <meta name="description" content="Home page description" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 itemProp="title">Home page</h1>
  </DefaultLayout>
);

export default Home;
