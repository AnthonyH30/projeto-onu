import React from 'react';
import Header from '../../Service/Header/Header';
import Main from '../../Components/Main/Main';
import Footer from '../../Service/Footer/Footer';
import { HandleCardContext } from '../../context/Context';

function Home() {
  return (
    <HandleCardContext>
        <Header />
        <Main />
        <Footer />
    </HandleCardContext>
  )
}

export default Home;