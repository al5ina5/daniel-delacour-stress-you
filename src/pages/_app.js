import Head from 'next/head'
import Meta from '../components/Meta'

import 'reset-css'
import './global.scss'

export default function App({ Component, pageProps }) {
    return <>
        <Meta />
        <Component {...pageProps} />
    </>
}