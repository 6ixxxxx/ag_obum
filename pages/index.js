import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { Component } from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import useLocalStorage from 'use-local-storage';

export default function Home({CurrentTheme, changeTheTheme}) {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    // console.log(theme)
  }
  return (
    <div className="app" data-theme={theme}
    >
       <Head>
        <title>Ag Photography</title>
       </Head>

      
      <Navbar CurrentTheme={theme} changeTheTheme={switchTheme}/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Faqs/>
      <Footer/> 
    </div>
  )
}
