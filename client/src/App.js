import './App.css';
import Button from './components/Button';
import Modal from './components/Modal';
import React, {useState} from 'react';

function App() {
  const [isModalOpen, updateIsModalOpen] = useState(false);

  const openModal= () => {
    updateIsModalOpen(true);
  }

  const handleClose = () => {
    updateIsModalOpen(false);
  }
  const handleSubmit = (data) => {
    updateIsModalOpen(false);
  }

  return (
    <div className="App">
        <Button text="Describe Project" handler={openModal} styleClass="centered button"/>
        <Modal show={isModalOpen} onHide={handleClose}/>
    </div>
  );
}

export default App;
