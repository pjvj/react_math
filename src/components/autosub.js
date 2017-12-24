import React, {Component} from 'react';

const AutoSub = (props) => {
    return (
        <div>
            <button className="circle"
                    onClick={
                    props.onAutoDecrease}>{"Auto--"}
            </button>
        </div>
    );
}

export default AutoSub;