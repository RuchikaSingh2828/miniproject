import { Form, Button} from 'react-bootstrap';
import moment from 'moment';
import axios from 'axios'
// import Button from './Button';
import React, { useState } from 'react';

const CreateProjectForm = (props) => {

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

    return isInvalidForm;
    }
    

    const handleSubmit = (event) => {
    let isInvalidForm = formValidation() ;
    if(isInvalidForm) return -1;
    axios.post('http://localhost:8000/project',{
        name: title,
        summary: description,
        date: delDate,
        cost: projectCost
    })
    .then(function (response) {
        props.onHide(true);
    }).catch(function (error){
        props.onHide(false);
    });

  
    return true;
    };

    return (
        <>
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
    </>
    );

}

export default CreateProjectForm;