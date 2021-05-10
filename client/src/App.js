import './App.css';
import Button from './components/Button';
import React, {useState} from 'react';

function App() {
  const [isModalOpen, updateIsModalOpen] = useState(false);

  const openModal= () => {}

  return (
    <div className="App">
        <Button text="Describe Project" handler={openModal} />
    </div>
  );
}

export default App;
