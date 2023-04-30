import React, { Component } from 'react';

class ItemList extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {console.log(data);
        this.setState({ items: data });
      },[]);
      
    }
    
  render() {
    return (
    
      <div>
        {this.state.items.length <= 0 ? <h1>no items</h1> : <>
        <h2>Item List</h2>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul></> 
        }
        
      </div>
    );
  }
}

export default ItemList;
