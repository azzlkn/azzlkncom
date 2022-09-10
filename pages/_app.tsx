import '../global.css';
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aziz ALKAN, Developer</title>
        <meta property="og:title" content="Aziz ALKAN, Developer" />
        <meta property="og:locale" content="tr_TR" />
        <link rel="canonical" href="https://www.azzlkn.com/" />
        <meta property="og:url" content="https://www.azzlkn.com/" />
        <meta name="description" content="Aziz Alkan, Full Stack Developer" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:site_name" content="Aziz Alkan" />
        <meta property="og:image" content="/images/azzlkn.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
