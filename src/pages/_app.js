// import '@/styles/globals.css'
import Head from 'next/head'
import { store } from '../redux/store/store'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

export default function App(props) {
  const { Component, pageProps} = props

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
  <>
  <Head>
  <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
  </Head>

  <Provider store = {store}>
    {getLayout(<Component {...pageProps}/>)}
  </Provider>
  </>
  )
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
}
