import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeModeProvider } from "../context/Themes";
import { AuthProvider } from "../context/AuthContenxt";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "../components/Layout";
import { ModalProvider } from "../context/ModalContext";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <AuthProvider>
        <ThemeModeProvider>
          <ModalProvider>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <CssBaseline />
            <ToastContainer />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ModalProvider>
        </ThemeModeProvider>
      </AuthProvider>
    </CacheProvider>
  );
}
