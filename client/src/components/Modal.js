import {Modal,  Form, Button} from 'react-bootstrap';
import moment from 'moment';
// import Button from './Button';
import React, { useState, useEffect } from 'react';


const ModalUI = (props) => {
    // * Title
    const [title, setTitle] = useState("");
    const [isTitleInValid, setIsTitleInValid] = useState(false);
    // * Description
    const [description, setDescription] = useState("");
    const [isDescriptionInValid, setIsDescriptionInValid] = useState(false);
    // * Delivery Date
    const [delDate, setDelDate] = useState("");
    const [isDelDateInValid, setIsDelDateInValid] = useState(false)
    // * Project Cost
    const [projectCost, setProjectCost] = useState("");
    const [isProjectCostInvalid, setIsProjectCostInvalid] = useState(false);  
   
    const formValidation = () => {
      let isInvalidForm = false;
      const currentDate = moment().format('DD.MM.YYYY');
      const dateIsValid = moment(delDate, "DD.MM.YYYY", true).isValid();

      if (title.length > 80  || title === "") {
        setIsTitleInValid(true);
        isInvalidForm = true;
      }
      if (description.length > 200  || description === "") {
        setIsDescriptionInValid(true);
        isInvalidForm = true;
      }
      if(!dateIsValid || moment(currentDate).isAfter(delDate)) { // Date Validation;
      //  console.log(moment('2010.10.20').isAfter('2010.10.19')); 
      //  console.log(currentDate, delDate); // ! moment library  is not working properly
        setIsDelDateInValid(true);
        isInvalidForm = true;
      }
      if (isNaN( +projectCost ) || +projectCost < 100 || +projectCost > 1000  || projectCost === "") {
        setIsProjectCostInvalid(true);
        isInvalidForm = true;
      }

      return !isInvalidForm;
    }
    

    const handleSubmit = (event) => {
      formValidation() ;

      return {
        name: title,
        summary: description,
        date: delDate,
        cost: projectCost
      }

    };
  



    return (
      // <h1> Modal </h1>
      <Modal {...props} centered size="lg" >
      <Modal.Header closeButton>
        <Modal.Title>Create Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form className="center pb-3" >
          <Form.Group >
            <Form.Control 
              type="text" 
              placeholder="Title"
              value={title} 
              onChange={(e) => {setTitle(e.target.value);  setIsTitleInValid(false);}} 
              required 
              isInvalid={ isTitleInValid } />
            <Form.Control.Feedback type="invalid">
                  Please enter correct title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="Description" 
              style={{ resize: "none" }} 
              value={description} 
              onChange={(e) => {setDescription(e.target.value);  setIsDescriptionInValid(false);}} 
              required 
              isInvalid={ isDescriptionInValid }/>
            <Form.Control.Feedback type="invalid">
                  Please enter correct Description
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.File  
              id="custom-file"
              label="Upload Attachment"
              custom
              className="mb-4"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control 
              type="text" 
              id="dateField" 
              placeholder="Delivery Date in DD.MM.YYYY format"
              value={delDate} 
              onChange={(e) => {setDelDate(e.target.value);  setIsDelDateInValid(false);}} 
              required 
              isInvalid={ isDelDateInValid } />
            <Form.Control.Feedback type="invalid">
              Please enter correct Delivery Date (Future Dates)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Control 
            type="text" 
            placeholder="Project Cost" 
            value={projectCost} 
            onChange={(e) => {setProjectCost(e.target.value);  setIsProjectCostInvalid(false);}} 
            required 
            isInvalid={ isProjectCostInvalid }/>
            <Form.Control.Feedback type="invalid">
                  Please enter correct Project Cost (100-1000)
          </Form.Control.Feedback>
          </Form.Group>
          <br/>
          <div className="container mb-3">
              <label>Cleverex transaction fees (20%)</label>
              <span> $0.00 </span>
          </div>
          <div className="container">
              <label>Total amount in $USD</label>
              <span> $0.00 </span>
          </div>
          
        </Form>
        <div className="container-center">
          <Button onClick={handleSubmit} className="button pr-5 pl-5">Create Project</Button>
        </div>
        

      </Modal.Body>
      {/* <Modal.Footer >
        <Button disabled={disabled} handler={submitForm} text="Create Project" styleClass="button pr-5 pl-5"/>
      </Modal.Footer> */}
    </Modal>
    );
  }

  export default ModalUI;


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