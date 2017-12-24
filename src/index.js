import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sub from './components/sub';
import Add from './components/add';
import AutoAdd from './components/autoadd';
import AutoSub from './components/autosub';
import DisplayNum from './components/display';


class Math extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 50
        };
    }

    render() {
        let changeVar;
        return (
        <div>
            <div className="heading"><h2>PLAY MATH</h2></div>
            <div className="letter">
                <DisplayNum number = {this.state.number}/>
            </div>
            <br/>
            <br/>
        <div className="row">
            <div className="col-sm-3">
                <AutoSub onAutoDecrease={() => {
                    window.clearInterval(changeVar);
                    changeVar = setInterval(() => {
                        if (this.state.number === 0) {
                            window.clearInterval(changeVar);
                            alert("cant go beyond 0");
                        }
                        else
                            this.setState({number: this.state.number - 1});
                    }, 1000);

                }}/>
            </div>
            <div className="col-sm-3">
                <Sub onDecreasing={()=> {
                    window.clearInterval(changeVar);
                    if (this.state.number === 0)
                        alert("cant go beyond 0");
                    else
                        this.setState({number: this.state.number - 1});
                }}/>
            </div>

            <div className="col-sm-3">
                <Add onIncreasing={() => {
                    window.clearInterval(changeVar);
                    if (this.state.number === 100)
                        alert("cant go so far");
                    else
                        this.setState({number: this.state.number + 1});
                }}/>
            </div>
            <div className="col-sm-3">
                <AutoAdd onAutoIncrease={() => {
                    window.clearInterval(changeVar);
                    changeVar = setInterval(() => {
                        if (this.state.number === 100) {
                            window.clearInterval(changeVar);
                            alert("cant go so far");
                        }
                        else
                            this.setState({number: this.state.number + 1});
                    }, 1000);

                }}/>
            </div>
        </div>
    </div>

    );
    }
}

    ReactDOM.render(<Math/>, document.querySelector('.container'));