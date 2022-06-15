import React from 'react';
import { styled } from '@linaria/react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Container = styled.div`
  padding: 10px;
`;

const Popup = () => {
  return (
    <Container>
      <div className="App">
        <header className="App-header">Popup</header>
      </div>
    </Container>
  );
};

export default Popup;
