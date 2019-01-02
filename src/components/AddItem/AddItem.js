import React , {Component} from 'react'
import './AddItem.css';
import CurrencyInput from 'react-currency-input';

class AddItem extends Component {
	state = {
		name : '',
		price : ''
	}

	handleChange = (e) => {
		this.setState ({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if(e.target.name.value === ''){
			return false
		} else {
			this.props.addItem(this.state)
			this.setState ({
				name: '',
				price: ''
			})
		}
		

	}
	render(){
		var NumberFormat = require('react-number-format');
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder= "Coffee..." id="name" onChange={this.handleChange} value={this.state.name}/>
					<input type="number" placeholder= "Price..." id="price" onChange={this.handleChange} value={this.state.price}/>

					<input type="submit" value="Add" />
				</form>
			</div>
			)
	}
}

export default AddItem