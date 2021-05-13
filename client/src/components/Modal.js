import {Modal} from 'react-bootstrap';
import React from 'react'


const CreateProjModalUI = (props) => {


    return (
      // <h1> Modal </h1>
      <Modal {...props} centered size="lg" >
      <Modal.Header closeButton>
        <Modal.Title>Create Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {props.children(props.onHide)} */}
        {React.Children.map(props.children,
          child => {
            return React.cloneElement(child,
            {onHide: props.onHide }, null);
        })}
        {/* {React.cloneElement(props.children, { onHide: props.onHide })} */}
      </Modal.Body>
      {/* <Modal.Footer >
      </Modal.Footer> */}
    </Modal>
    );
  }

  export default CreateProjModalUI;


  // function checkDateValidity(){
  //   const dateEntered = this.value;
  //   const dateIsValid = moment(dateEntered, "DD.MM.YYYY", true).isValid();
  //   validStatus.textContent = dateIsValid ? 'valid' : 'invalid';
  // }
  
  // const dateTextField = document.querySelector('input');
  // const submitButton = document.querySelector('button');
  // const validStatus = document.querySelector('span');
  
  // dateTextField.addEventListener('keyup', checkDateValidity, false);
  // checkDateValidity();
  // https://www.sitepoint.com/managing-dates-times-using-moment-js/