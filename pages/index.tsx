import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuList from "../component/website/menu/MenuList";
import Container from "../component/website/elemets/Container";
import React from 'react';
import { ProductCard } from 'component/ProductCard/ProductCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trang chủ - KIA Gò Vấp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Container>
          <MenuList></MenuList>
        </Container>

      </header>
      <main className={styles.main}>
        <ProductCard />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design by KMASoft
        </a>
      </footer>
    </div>
  )
}
