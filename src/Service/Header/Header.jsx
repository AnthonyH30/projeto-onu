import React from 'react';
import { Container } from './Styles';
import logo from '../../assets/logo.svg';
import dots from '../../assets/dots.svg';
import { BiSearchAlt2 } from 'react-icons/bi'

function Header() {
  return (
    <Container>
        <div className="logo">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <div>
                <h2>Surui</h2>
                <p>Magé</p>
                <img width='50px' src={dots} alt="dots" />
            </div>
        </div>
        <div className='text'>
            <p className='title'>Bairros Unidos</p>
            <p className='city'>Magé, RJ</p>
        </div>
        <form className='search' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Pesquise aqui' />
            <button className='btn'><BiSearchAlt2 /></button>
        </form>
    </Container>
  )
}

export default Header;