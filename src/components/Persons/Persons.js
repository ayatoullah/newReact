//can be a functional component as i will not set state here
import React from 'react';
import Person from './Person/Person'
const persons =(props) => (        
    Array.from(props.persons).map((person , index) =>{
        return ( <Person 
              click={ () =>props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => {props.changed(event,person.id)}}/>
        )
    }
      ));
export default persons;
