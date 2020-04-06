import { NextPage } from 'next';
import Head from 'next/head';
import DefaultLayout from '../../layouts/Default';

const Home: NextPage = () => (
  <DefaultLayout>
    <Head>
      <title>Home page</title>
      <meta name="description" content="Home page description" />
    </Head>
    <h1 itemProp="title">Home page</h1>
  </DefaultLayout>
);

export default Home;
