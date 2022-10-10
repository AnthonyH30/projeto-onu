import React from 'react';

import { Container } from './Styles';

function Text({title, paragraph}) {
  return (
    <Container>
        <h2>{title}</h2>
        <p>{paragraph}</p>
    </Container>
  )
}

export default Text;