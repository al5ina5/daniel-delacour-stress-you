import Head from 'next/head'

import 'reset-css'
import './global.scss'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, maximum-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
        </Head>
        <Component {...pageProps} />
    </>
}