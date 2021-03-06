import '../styles/index.scss'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import { seoConfig } from '../config/seo'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
