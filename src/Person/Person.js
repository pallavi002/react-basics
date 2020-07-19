import React from 'react';
import styling from './Person.css';

// class Person extends Component {
//   render() {
//     return (
//       <div className="Person">
//         <h1>This is person Component.</h1>
//       </div>
//     );
//   }
// }

const Person = (props) => {
  return (
    <div className={styling.Person}>
      <h2 onClick= {props.click} className={styling.trying}>This is person Component and I am {props.name} {props.lastname} and I am {props.age} years old.</h2>
      <b><p onClick= {props.click}>{props.children}</p></b>
      <input type="text" onChange= {props.changed} value={props.name}/>
    </div>
  )
}


export default Person;
