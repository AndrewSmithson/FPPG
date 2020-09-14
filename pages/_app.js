import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../lib/store'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Head>
        <link rel="stylesheet" href="/css/main.css" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}