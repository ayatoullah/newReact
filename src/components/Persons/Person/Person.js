import React from 'react';
// import Radium from 'radium';
import classes from'./Person.css';
const person = (props) => {
    // const style ={
    //     '@media (min-width : 500px)':{
    //         width :'450px'
    //     }
    // }
    return (
        <div className={ classes.Person }>
            <p onClick={ props.click }>I'm { props.name }{ props.age }</p>
            <p>{ props.childern }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
)
};
export default person;