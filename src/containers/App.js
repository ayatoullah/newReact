import React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = { 
    
    persons : [
      {
        id:1,name:"max",age:28
      },
      {
        id:2,name:"john",age:29
      },
      {
        id:3,name:"micheal",age:26
      }
    ],otherState: 'some other value',
      showPersons :false
  
  };

  nameChangedHandler= (event,id) =>{
    console.log('inside nameChangedHandler');
    const personIndex=this.state.persons.findIndex(p => p.id === id);
    console.log('personIndex',personIndex);
    const person = {...this.state.persons[personIndex]};
    console.log('person',person);
    person.name= event.target.value;
    console.log('person.name',event.target.value);
    const persons = {...this.state.persons};
    console.log('persons',persons);
    persons[personIndex] = person;
    console.log('persons[personIndex]',persons[personIndex]);
    console.log('persons inside nameChangedHandler',persons);
    debugger;
    this.setState({persons : persons},() =>{
      console.log('state nameChangedHandler',this.state);
    });
    
    
  }


  togglePersonsHandler= ()=>{
    const doesShow = this.state.showPersons;
    this.setState ({showPersons : !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // console.log('inside delete');
    const persons =this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  deletePersonHandler = (personIndex) => {
    
    // console.log('inside delete');
    const persons =[...this.state.persons];//spread array into new array
    persons.splice(personIndex,1);
    this.setState({persons:persons});
    
  }

 
  render(){
    console.log('show person inside render',this.state.showPersons);
    const style={
      backgroundColor : 'green',
      border :'1px solid blue ',
      padding :'1%',
      marginTop :'1%',
      boderRadius :'3%',
      width : '50%',
      font :'inherits',
      // ':hover' :{
      //   backgroundColor : 'lightgreen',
      //   color : 'black'
      // }
    }
    let persons=null;
    //console.log()
    
    
    if(this.state.showPersons){  
      persons = (
        <div>
        {
          
         <Persons persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.nameChangedHandler}/>
        }
         
         
        </div>
      );
      style.backgroundColor ='red';
 
      
    }

    
    return(
      // <StyleRoot>
      <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.togglePersonsHandler}
                   appTitle={this.props.title}/>
              {persons}
      </div>
      
      // </StyleRoot>
    );
    // return React.createElement('div',{ className:'App'},React.createElement('h1',null,'Ramy'));
    
  
  }
}

export default App;
