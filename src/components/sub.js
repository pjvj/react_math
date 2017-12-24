import React, {Component} from 'react';

const Sub =(props)=> {
    return (
        <div>
        <button className="circle"
                onClick={
                props.onDecreasing}>{"Sub"}
        </button>
    </div>
    );
};

export default Sub;