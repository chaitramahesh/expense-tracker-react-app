
import React from 'react';

import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
};

export default Card;

// to use components as wrapper element  like <div>
//(i.e as opening and closing tags ex: as in Expenses and ExpenseItem)
// we have to set children and classNames etc. bcz it does not support everything by 
// default as <div> does. it supports only those which we well ask them to support

