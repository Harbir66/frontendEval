import React from 'react';
import { Header, Footer, MainContainer } from '../../components';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default Home;
