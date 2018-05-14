import React, { Component } from 'react';


class AddProduct extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event){
    event.preventDefault();
    console.log(this.refs.name.value,' - ', this.refs.price.value);
    this.props.onAdd(this.refs.name.value,this.refs.price.value);
    this.refs.name.value = '';
    this.refs.price.value = '';
  }

  render() {
      
    return (
        <form onSubmit={this.onSubmit}>
            <h3>Add Product</h3>
            <input placeholder="Name" ref="name"/>
            <input placeholder="Price" ref="price"/>
            <button>Add</button>
            <hr/>
            
        </form>
    );
  }
}

export default AddProduct;
