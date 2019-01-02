import React , {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems'
import AddItem from './components/AddItem/AddItem'
import Mac from './mac.jpg'

class App extends Component {
  state = {
    items : [
      {id:1,name:'Hamza',price:22, pav:'pav/mac.jpg'},
      {id:2,name:'Moham',price:25, pav:'pav/mac.jpg'},
      {id:3,name:'Abdo',price:28, pav:'pav/mac.jpg'}
    ]
  }

deleteItem = (id) => {
 let items = this.state.items.filter(item => {
  return item.id !== id
 })
 this.setState({items})
}

addItem = (item) => {
  item.id = Math.random();
  let items = this.state.items;
  items.push(item);
  this.setState({items})
}

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">Coffee price</h1>
        <TodoItems items={this.state.items} img src={Mac} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}
export default App;
