import './App.css';
import Button from './components/Button';
import Modal from './components/Modal';
import Form from './components/Form';
import Confirmation from './components/Confirmation';
import ChooseCard from './components/ChooseCard';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


import React, {useState} from 'react';

function App() {
  // const [isModalOpen, updateIsModalOpen] = useState(false);
  // const [isCreateProject, setIsCreateProject] = useState(true);
  // const [modalTitle, setModalTitle] = useState("Create Project")

  // const history = useHistory();
 
  // const shouldNewModalOpen = async (flag ) => {
  //   if(flag) {
  //     updateIsModalOpen(false);
  //     setTimeout(() => {
  //       updateIsModalOpen(true);
  //       setIsCreateProject(false);
  //       setModalTitle("Choose Card")
  //     }, 1000);
  //   }
  //  else {
  //   updateIsModalOpen(false);
  //   setIsCreateProject(true);
  //   setModalTitle("Create Project");
    
  //   history.push("/confirmation");

  //  }
  // }


  return (
    <div className="App">
        <Route exact path="/" render={(props) => <Home /> } />
        <Route exact path="/confirmation" render={(props) => <Confirmation /> } />
    </div>
  );
}

export default App;
