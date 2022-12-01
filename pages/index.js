import Head from 'next/head';
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <meta
          name='title'
          property='og:title'
          content='Dani Matuko - Web developer'
        />
        <meta
          name='description'
          property='og:description'
          content='Dani Matuko is a professional web developer'
        />
        <meta
          name='keyword'
          content='portflio, javascript, developer'
        />
        <meta
          property='og:type'
          content='website'
        />

        <meta
          property='og:url'
          content='https://www.dani-matuko.com/'
        />
        <meta
          property='og:image'
          content='/website-preview.png'
        />

        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
      </Head>
      <main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <Nav
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Hero />
        </section>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}
