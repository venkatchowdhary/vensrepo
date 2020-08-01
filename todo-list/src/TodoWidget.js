import React, { Component} from 'react';
import UList from './UList';

class TodoWidget extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
      tasks : [],
	  task : ''
	  };
	}


	setValue = e => {
      this.setState({task: e.target.value});
	}
	addItem = (e) => {
		e.preventDefault();
		if (this.state.task) {
			this.setState({tasks : [...this.state.tasks, this.state.task]});
		    this.setState({task: ''});
		}
	}
	deleteItem = (index) => {
		   let t = [...this.state.tasks]
		   t.splice(index, 1);
		   this.setState({tasks: t})
	}
	render() {
		return (
		<div>
		  <form onSubmit={e => this.addItem(e)}>
			<input placeholder="Enter a task" 
			       onChange={e => this.setValue(e)}
			       value={this.state.task}>
			</input>
			<button type="submit">Add</button>
		  </form>
		  <div>
				<UList list={this.state.tasks} onDelete={this.deleteItem}/>          
		  </div>
		</div>
		);

	}
}
export default TodoWidget;
