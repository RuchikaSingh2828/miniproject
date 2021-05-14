import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card } from 'react-bootstrap';
import { CgFileDocument } from "react-icons/cg";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import Button from '../components/Button';
import moment from 'moment'


const Confirmation = () => {
    const [data, setData] = useState({
        projectCost: "",
        cost: 0,
    });
    const [loading, setLoading] = useState(true);
    const [dateDiff, setDateDiff] = useState(0);



    useEffect(() => {
        axios.get('http://localhost:8000/project')
        .then(response => {
            setData(response.data)
            setLoading(false);
            calcDays(response.data.date);
        })
        .catch(err => window.alert(err));
    }, []);

    const calcDays = (registereDate) => {
        const currentDate = moment(['DD.MM.YYYY'])
        const delDate = moment(registereDate);
        const days = currentDate.diff(delDate, 'days');
        setDateDiff(20);
    }

    
    return (
        <>
        {
            loading 
            ? <h1 className="centered">Loading...</h1> 
            : (
                <div className="centered page-card"> 
                    <div className="pb-3"> 
                        <CgFileDocument style={{color:"green", fontSize: "1.5rem"}}/> 
                        <b className="text-blue p-2"><i>Your Project Request</i></b> 
                    </div>
                    <Card style={{width:"80vw"}} >
                        <Card.Header>
                            <div className="container">
                                <span><b> I'll be your buisness expert </b> </span>
                                <span className="row-container">
                                    <span className='main-price'>${data.cost}</span>
                                    <span className="small-text">Total : ${+data.cost*0.2 + +data.cost} </span>
                                    <span className="small-text">(Cleverex Fee +20%)</span>
                                </span>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className="p-2 grey-text">
                                Instead of the Typical seamless color transition tht you see in gradient
                                <div className="pt-5">
                                    <span>
                                        <IoCalendarClearOutline style={{color:"blue", fontSize: "1.5rem"}} className="pr-2"/> 
                                        {dateDiff} day delivery
                                    </span>
                                    <span className="ml-5">
                                        <FaRegFolder style={{color:"blue", fontSize: "1.5rem"}} className="pr-2"/> 
                                        {dateDiff} Attachment
                                    </span>
                                </div>
                            </Card.Text>
                            <div className="m-5 p-5 container-center">
                                <Button text="Pay" styleClass="button pr-5 pl-5" handler={() =>{}} />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
            
        }
        </>
    )
}

export default Confirmation;