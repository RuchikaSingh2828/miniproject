import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Button from './Button';
import Modal from './Modal';
import Form from './Form';
import ChooseCard from './ChooseCard';



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