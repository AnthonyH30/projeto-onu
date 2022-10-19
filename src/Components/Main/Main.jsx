import React from 'react';
import Text from '../Texts/Text';
import { Container } from './Styles';
import Cards from '../Cards/Cards'


function Main() {
  return (
    <Container>
        <Text title='Como os Bairros Unidos apoiam os Objetivos de Desenvolvimento Sustentável em Magé' paragraph='Estamos trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. São 7 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas em Magé e no Brasil.' />
        <Text title='Os Objetivos de Desenvolvimento Sustentável em Magé' paragraph='Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais Magé está contribuindo a fim de que possamos criar um lugar melhor para vivermos.' />
        <Cards />
    </Container>
  )
}

export default Main;