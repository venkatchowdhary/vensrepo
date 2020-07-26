import React, { Component} from 'react';

class TodoList extends Component {

	constructor(props) {
          super(props);
	  this.state = {
      items : [],
	    term : ''
	  };
	}

	setValue = e => {
           this.setState({term: e.target.value});
	}
	addItem = () => {
		this.setState({items : [...this.state.items, this.state.term]});
	}
	render() {
		return (
		<div className="todoListMain">
		  <form onSubmit={e => this.addItem(e)}>
			<input placeholder="enter task" 
			       onChange={e => this.setValue(e)}
			       value={this.state.term}>
			</input>
			<button type="submit">Add</button>
		  </form>
		  <div>
                     <li>{this.state.items[0]}</li>
		  </div>
		</div>
		);

	}
}
export default TodoList;
