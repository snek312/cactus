import React from 'react';
import './styles/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
// import MainContent from './components/MainContent'
import AppRouter from './routes/Router'

function App() {
  return (
    <>
      <Header />
      {/* <MainContent /> */}
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
