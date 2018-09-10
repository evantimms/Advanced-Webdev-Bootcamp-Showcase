import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Card = (props) =>{
    let style ={};
    if(props.showing){
        style.backgroundColor = props.backgroundColor;
    }   

    return(
        <div className="card-container" style={style}/>
    );
}

Card.propTypes  ={
    showing: PropTypes.bool.isrequired,
    backgroundColor: PropTypes.string.isrequired,
    onClick: PropTypes.func.isrequired
}

export default Card;    