import React, {Component} from 'react';

const Add = (props) => {
    console.log("props : " + props);
    return (
        <div>
            <button className="circle"
                onClick={
                    props.onIncreasing}>{"Add"}
            </button>
        </div>
);
}

export default Add;