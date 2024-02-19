import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Gustavo Noronha</title>
        <link rel="shortcut icon" href="/img/gustavo.jpg" />
        <link rel="apple-touch-icon" href="/img/gustavo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Software Engineer" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
