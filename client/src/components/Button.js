import React from 'react';
import { Button } from 'react-bootstrap';

 const button = ({ text, handler }) => {
    return <Button className="button centered" onClick={ handler }>{ text }</Button> 
}

export default button;