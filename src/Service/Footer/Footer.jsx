import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

function Footer() {
  return (
    <Container>
        <div className="logo">
            <img src={logo} alt="logo" />
            <p>Bairros Unidos</p>
        </div>
        <p className='text'>© Copyright 2022 Bairros Unidos</p>
    </Container>
  )
}

export default Footer