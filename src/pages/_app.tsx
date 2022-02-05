import 'carbon-components/scss/globals/scss/styles.scss';
import App, { AppProps, AppContext } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  return { ...appProps };
};

export default MyApp;
