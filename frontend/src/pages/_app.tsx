// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;