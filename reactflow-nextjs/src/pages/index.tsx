import type { NextPage } from 'next';
import Head from 'next/head';
import Flow from 'components/Flow';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tracer UI Test</title>
        <meta name="description" content="" />
      </Head>
      <header className={styles.header}>Tracer UI - Test Example</header>
      <Flow />
    </div>
  );
};

export default Home;
