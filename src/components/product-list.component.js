import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = props => (
    <tr>
      <td>{props.product.pname}</td>
       <td>{props.product.amount}</td>
      
      
      <td>
        <Link to={"/editProduct/"+props.product._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>Delete</a>
      </td>
    </tr>
  )

export default class ProductList extends Component
{
    constructor(props)
    {
     super(props);
     this.deleteProduct=this.deleteProduct.bind(this);
        this.state={
            product:[]
    
        };

    }
    componentDidMount(){
        axios.get('https://grocer-server.herokuapp.com/api/products/getAllProducts')
        .then(res=>{
            this.setState({
                product:res.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
       
        
    }
    deleteProduct(id) {
      axios.delete('https://grocer-server.herokuapp.com/api/products/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
          //el is every element in exercise error so el._id will refer database id
        product: this.state.product.filter(el => el._id !== id)
      })
    }
    productlist()
    {
        return this.state.product.map(currentproduct => {
            return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
          })
    }
    render(){
        return(
            <div>
            <h3>All Product</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.productlist() }
              </tbody>
            </table>
          </div>
        )
    }
}