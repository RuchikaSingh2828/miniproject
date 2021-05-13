import './App.css';
import Button from './components/Button';
import Modal from './components/Modal';
import Form from './components/Form';

import React, {useState} from 'react';

function App() {
  const [isModalOpen, updateIsModalOpen] = useState(false);
  const [isCreateProject, setIsCreateProject] = useState(true);
  const [chooseCard, setChooseCard] = useState(false)

 
  const shouldNewModalOpen = (flag ) => {
    if(flag) {
      updateIsModalOpen(false);
      setIsCreateProject(false);
      this.setTimeout(() => {
        updateIsModalOpen(true);
        setChooseCard(true);
      }, 1000);
    }
   else {
    updateIsModalOpen(false);
    setIsCreateProject(true);
    setChooseCard(false);
   }
  }


  return (
    <div className="App">
        <Button text="Describe Project" handler={() => updateIsModalOpen(true)} styleClass="centered button"/>
        <Modal show={isModalOpen} onHide={shouldNewModalOpen}>
          {isCreateProject ? <Form /> : null}
          {/* {chooseCard ? <div>other modal </div> : null} */}
        </Modal>

    </div>
  );
}

export default App;
