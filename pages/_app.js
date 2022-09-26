import Router from 'next/router';
import Head from 'next/head';
import nProgress from 'nprogress';
import {ChakraProvider, Progress} from '@chakra-ui/react';
import Layout from '../components/Layout.jsx';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>

    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </>
  )
}

export default MyApp
