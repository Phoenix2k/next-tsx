import Head from 'next/head';
import DefaultLayout from '../../layouts/Default';

const About = (): JSX.Element => (
  <DefaultLayout>
    <Head>
      <title>About page</title>
      <meta name="description" content="About page description" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 itemProp="title">About page</h1>
  </DefaultLayout>
);

export default About;
