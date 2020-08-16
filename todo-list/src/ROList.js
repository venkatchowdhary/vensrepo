import React from 'react';

//Read Only List
const ROList = (props) => {
    return (
     <div>
         {props.list
         .map(item => <h2>{item}</h2>)}
     </div>
    );
}
export default ROList;