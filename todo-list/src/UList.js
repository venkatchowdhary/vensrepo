import React, {Component} from 'react';

//Updatable List
class UList extends Component {
    
render () {
    return(<div>
        {this.props.list
        .map((item, index) =>
        <div key={index} >
           <h2>{item}</h2>
           <button onClick={() => this.props.onDelete(index)}>Delete</button>
         </div>
         )}
    </div>);
    }
}
export default UList;