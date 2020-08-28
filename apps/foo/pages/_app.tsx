import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to foo!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <h1>Welcome to foo!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default CustomApp;
