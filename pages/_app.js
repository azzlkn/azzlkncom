import '../global.scss'
import React from "react";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <title>Aziz Alkan, Full Stack Developer</title>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700%7CAllura" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
