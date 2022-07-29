import type { NextPage } from 'next'
import Head from 'next/head'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Courses from '../components/courses';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Features from '../components/features';
import Faqs from "../components/faqs";
import AboutFounder from '../components/aboutFounder';

const theme = createTheme();
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reboot Tech Community</title>
        <meta name="description" content="Reboot Tech Community" />
        {/* will change shortly */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Hero />
            <AboutFounder />
            <Features />
            <Courses />
            <Faqs />
            <Footer />
        </ThemeProvider>
    </div>
  )
}

export default Home

