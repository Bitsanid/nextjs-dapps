import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout pageTitle="Home">
    <h1 className={styles['title-homepage']}>Blockchain Studio ID</h1>
    </Layout>
  );
}
