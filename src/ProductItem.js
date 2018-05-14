import React, { Component } from 'react';


class ProductItem extends Component {
  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

    this.state = {isEdit: false};
  }
  onEdit(){
    this.setState({isEdit: true});
  }
  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.refs.name.value,
      this.refs.price.value, this.props.name); //third arg as id
    this.setState({isEdit: false});
  }
  onDelete(){
    const {onDelete, name}= this.props;
    onDelete(name);
  }
  
  render() {
      const {name,price} = this.props;
    return (
        <div>
          {
            this.state.isEdit ? (
              <form onSubmit={this.onEditSubmit}>
                <input placeholder="Name" defaultValue={name} ref="name"/>
                <input placeholder="Price" defaultValue={price} ref="price"/>
                <button>Save</button>
              </form>
              
            ) : (
              <div>
              <span>{name}</span>
              {` | `}
              <span>{price}</span>
              {` | `}
              <button onClick={this.onEdit}>Edit</button>
              {` | `}
              <button onClick={this.onDelete}>Delete</button>
              </div>
            )
          }
       
        </div>
    );
  }
}

export default ProductItem;
