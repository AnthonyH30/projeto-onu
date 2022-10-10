import { useContext } from 'react';
import { Container } from './Styles';
import { CardContext } from '../../context/Context';

function Cards() {
  const { cards } = useContext(CardContext);

  return (
    <Container>
      {cards.map(card => (
        <div className='card' key={card.id}>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
    </Container>
  )
}

export default Cards;