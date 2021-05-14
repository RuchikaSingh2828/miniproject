import React, {useState} from 'react';
import {Card } from 'react-bootstrap';
import { AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaCcVisa } from "react-icons/fa";
import Button from './Button'
// import { ReactComponent as VisaIcon } from "../VisaBlue.svg";
// const VisaIcon = require("../VisaBlue.svg");


const ChooseCard = props => {

    return (
        <>
            <CardItemList lists={cardItemArr}/>
            <Card className="cards mb-4 mr-3 ml-3" >
                <span>
                    <AiOutlineCheckCircle className="p-2" style={{visibility:"hidden"}}/>
                    <span className="p-2">
                            <AiOutlinePlus style={{ fontSize: "0.8rem"}}/>
                    </span>

                    Add Card
                </span> 
            </Card>

            <div className="m-5 p-5 container-center">
                <Button text="Pay" styleClass="button pr-5 pl-5" handler={() => props.onHide(false)} />
            </div>
        </>
    )
};

export default ChooseCard;

const cardItemArr = [
    {
        id: 1,
        selected: true,
        cardLastDigits: 1234,
    },
    {
        id: 2,
        selected: false,
        cardLastDigits: 4567,
    }
]

const CardItemList = (props) => {
    let list = props.lists.map(el => {
        if(el.selected)  return (
            <Card key={el.key} className="cards mb-4 mr-3 ml-3" border="primary" >
                <span>
                    <AiOutlineCheckCircle style={{color:"chartreuse", fontSize: "1.5rem"}}/>
                    <span className="p-2">
                        <FaCcVisa  style={{color:"blue", fontSize: "2rem"}}/> 
                    </span>
                </span>
                
                {`Visa Card Ending With ${el.cardLastDigits}`}
                </Card>
        );
       return  (
        <Card key={el.key} className="cards mb-4 mr-3 ml-3" >
            <span> 
                <AiOutlineCheckCircle className="p-2" style={{visibility:"hidden"}}/>
                <span className="p-2">
                    <FaCcVisa  style={{color:"blue", fontSize: "2rem"}}/>
                </span>
            </span>
            {`Visa Card Ending With ${el.cardLastDigits}`}
        </Card>
        )
    })

    return list;
    
}