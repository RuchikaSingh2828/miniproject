// import '../App.css';
import Button from './Button';
import Modal from './Modal';
import Form from './Form';
import Confirmation from './Confirmation';
import ChooseCard from './ChooseCard';
import { useHistory } from "react-router-dom";


import React, {useState} from 'react';

function Home() {
  const [isModalOpen, updateIsModalOpen] = useState(false);
  const [isCreateProject, setIsCreateProject] = useState(true);
  const [modalTitle, setModalTitle] = useState("Create Project")
  const history = useHistory();

  const shouldNewModalOpen = async (flag ) => {
    if(flag) {
        updateIsModalOpen(false);
        setTimeout(() => {
        updateIsModalOpen(true);
        setIsCreateProject(false);
        setModalTitle("Choose Card")
    }, 1000);
    }
    else {
        updateIsModalOpen(false);
        setIsCreateProject(true);
        setModalTitle("Create Project");
        history.push("/confirmation");
    }
  }


  return (
    <div className="Home">
        <Button text="Describe Project" handler={() => updateIsModalOpen(true)} styleClass="centered button"/>
        <Modal show={isModalOpen} onHide={shouldNewModalOpen} title={modalTitle}>
          {isCreateProject ? <Form /> : <ChooseCard /> }
        </Modal>
    </div>
  );
}

export default Home;