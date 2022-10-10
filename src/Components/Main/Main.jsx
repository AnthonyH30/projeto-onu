import React from 'react';
import Text from '../Texts/Text';
import { Container } from './Styles';
import Cards from '../Cards/Cards'


function Main() {
  return (
    <Container>
        <Text title='Como as Nações Unidas apoiam os Objetivos de Desenvolvimento Sustentável no Brasil' paragraph='A ONU e seus parceiros no Brasil estão trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. São 17 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo.' />
        <Text title='Os Objetivos de Desenvolvimento Sustentável no Brasil' paragraph='Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.' />
        <Cards />
    </Container>
  )
}

export default Main;