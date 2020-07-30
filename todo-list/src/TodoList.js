import React, { Component} from 'react';

class TodoList extends Component {

	constructor(props) {
		super(props);
		console.log('** Constructor **');
	  this.state = {
      items : [],
	    term : ''
	  };
	}


	setValue = e => {
      this.setState({term: e.target.value});
	}
	addItem = (e) => {
		  e.preventDefault();
			this.setState({items : [...this.state.items, this.state.term]});
			this.setState({term: ''});
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
				{this.state.items.map(item =>
					<li>{item}</li>
					)}           
		  </div>
		</div>
		);

	}
}
export default TodoList;
