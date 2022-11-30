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
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
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
