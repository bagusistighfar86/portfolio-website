import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route } from 'react-router-dom';
import Home from 'views/home';
import Portfolio from 'views/portfolio';
import Website from 'views/portfolio/website';
import UIUX from 'views/portfolio/uiux';
import Photography from 'views/portfolio/photography';
import Videography from 'views/portfolio/videography';
import DetailWeb from 'views/portfolio/detailWeb';
import Layout from './components/layout/Layout';
import theme from './style/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />}>
            <Route path="website" element={<Website />} />
            <Route path="uiux" element={<UIUX />} />
            <Route path="photography" element={<Photography />} />
            <Route path="videography" element={<Videography />} />
          </Route>
          <Route path="portfolio/detailWeb/:id" element={<DetailWeb />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
