import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "../styles/index.css";

// import './icon.js';

function SimpleCounter(props){
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="fa fa-clock" />
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(four, three, two, one);

    counter++;
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
        document.querySelector("#app")
    );
}, 1000);
