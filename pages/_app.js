import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { NotificationProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          ></meta>
          <link rel='shortcut icon' href='/favicon.png' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
