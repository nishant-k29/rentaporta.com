import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/globals.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { SidebarContextProvider } from '../contexts/SidebarContext'
import { QuoteContextProvider } from '../contexts/QuoteContext'
import Testimonial from '../components/Testimonial'
import {useEffect} from 'react'
import Head from "next/head"
import initGA, { PageView } from '../lib/analytics';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    initGA('YourTrackingID')
    PageView()
  })

  return (
    <>
      <html lang="en" />
      <Head>
        <link rel="manifest" href="manifest.webmanifest" />
        <link rel="icon" href="logo-black.svg" />
        <link rel="apple-touch-icon" href="icon-192x192.png" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <meta name = "apple-mobile-web-app-capable" content="yes" />
        <meta name = "apple-mobile-web-app-status-bar-style" content="#001A2E" />
        <meta name = "apple-mobile-web-app-title" content="Rent A Porta" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO}/>
      <SidebarContextProvider>
        <QuoteContextProvider>
          <Sidebar />
          <Layout>
            <Header />
            <Nav />
            <Component {...pageProps} />
            <Testimonial />
            <Footer />
          </Layout>
        </QuoteContextProvider>
      </SidebarContextProvider>
    </>
  )
}

export default MyApp
