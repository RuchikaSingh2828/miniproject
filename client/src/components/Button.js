import React from 'react';
import { Button } from 'react-bootstrap';

 const button = ({ text, handler, styleClass, disabled=false}) => {
    return <Button disabled={disabled} className={`${styleClass}`} onClick={ handler }>{ text }</Button> 
}

export default button;