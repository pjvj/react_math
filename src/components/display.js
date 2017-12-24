import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

const DisplayNum = (props) => {
    console.log(props);
    return (
        <div>
            <h2>{props.number}</h2>
        </div>
    );
}

export default DisplayNum;