import React from 'react'
import './TodoItems.css'
import Mac from './mac.jpg'
import NumberFormat from 'react-number-format';

const TodoItems = (props) => {
	const {items , deleteItem} = props;
	let length = items.length;
	const ListItems = length ? (
		items.map(item => {
			return (
				
				<div className="poz">
					<div key={item.id}>			
					<img src={Mac} height="150"/>		
						<span className="name1">Coffee: {item.name}</span>					
						<span className="price1">Price: {item.price} $</span>
						<span className="action icon" onClick={() => deleteItem(item.id)}> &times; </span>
					</div>
				</div>
			)
		})
	) : (
		<p> There is no item to show </p>
	)
	
	return (
		<div className="ListItems">		 
			{ListItems}
		</div>
	)
}

export default TodoItems;