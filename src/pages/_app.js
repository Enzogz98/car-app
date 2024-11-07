// src/pages/_app.js
import '../styles/global.css';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}