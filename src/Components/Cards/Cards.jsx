import { useContext } from 'react';
import { Container } from './Styles';
import { CardContext } from '../../context/Context';
import Modal from 'react-modal';
import './modal.css'

Modal.setAppElement('#root');
function Cards() {
  const { modalIsOpen, openModal, closeModal, activeModal, filteredCards } = useContext(CardContext);

  return (
    <Container>
      {filteredCards.length ?
        filteredCards.map(card => (
          <div onClick={() => openModal(card)} className='card' key={card.id}>
            <img src={card.image} alt={card.title} />
          </div>
        )) : <p className='not-found'>Nenhum Objetivo encontrado</p>
}
      
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName="modalOverlay"
      className="modalContent"
      >
        {activeModal.map(item => (
          <div key={item.id}>
            <p className='number'>{item.id}</p>
            <div className='banner' style={{'backgroundColor':item.color}}>
              <img src={item.icon} alt={item.title} />
              <h2>{item.title}</h2>
            </div>
            <div className='content'>
              <h2>{item.title}</h2>
              <ul>
                <li>{item.obj1}</li>
                <li>{item.obj2}</li>
                <li>{item.obj3}</li>
              </ul>
            </div>
          </div>
        ))}
      </Modal>
    </Container>
  )
}

export default Cards;