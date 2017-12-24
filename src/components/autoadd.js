import React, {Component} from 'react';

const AutoAdd = (props) => {
    return (
        <div>
            <button className="circle"
                    onClick={
                    props.onAutoIncrease}>{"Auto++"}
            </button>
        </div>
    );
}
export default AutoAdd;