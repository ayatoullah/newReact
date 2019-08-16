import React from 'react';
import classes from'./Cockpit.css';
const cockpit= (props) => {
    let assClasses=[];
    let btnClass='';
    
    if(props.showPersons){
        btnClass =classes.Red;
    }
    if (props.persons.length<=2){
      //classes.push('red');
      assClasses.push(classes.red);

    }
    if (props.persons.length<=1){
      assClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <p className={assClasses.join( ' ' )}>this is my first app in react</p>
            <button className={btnClass}  onClick={props.clicked}>click me</button>
        </div> 
    )
}
export default cockpit;