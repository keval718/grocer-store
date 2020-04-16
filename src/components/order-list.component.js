import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Product = props => (
 
    <tr>
      {props.key}
      {/* <td>{props.product[0].product[0].pname}</td> */}
      <td>
      {Object.keys(props.product.product).map((obj, i) => {
      return (
         <p>
        <p>Name:{props.product.product[obj].name}</p>
        <p>Quantity:{props.product.product[obj].quantity}</p>  
        <p>Price:{props.product.product[obj].price}</p>
        <br></br>

        </p> 
      )})}</td>
      
       <td>{props.product.fk_user_id}</td>
       <td>${props.product.total}</td>
       <td>
       <button onClick={() => { props.OnDelete(props.product._id)} }>Delieverd</button>
      </td>
      
    </tr>
  )

export default class ProductList extends Component
{
    constructor(props)
    {
     super(props);
     

     this.OnDelete = this.OnDelete.bind(this)
        this.state={
            product:[]
    
        };

    }
    componentDidMount(){
        axios.get('http://grocer-server.herokuapp.com/api/orders')
        .then(res=>{
            this.setState({
                product:res.data
                
            })
          
            console.log(this.state.product+"final data received");
            //console.log(this.state.product[0].product[1].pname);
        })
        .catch((error)=>{
            console.log(error);
        });
       
        
    }

    OnDelete(id)
    {
      console.log("Here");
      axios.delete('http://grocer-server.herokuapp.com/api/orders/' + id)
          .then(res=>{
            
              console.log(res.data + "Deleted");
           
          })
          .catch((error)=>{
              console.log(error);
          });
          this.setState({ product: this.state.product.filter(e1 => e1._id !== id)})

    }

    productlist()
    {
        return this.state.product.map(currentproduct => {
            return <Product product={currentproduct} OnDelete={this.OnDelete} key={currentproduct._id}/>;
          })
    }

    render(){
        return(
            <div>
            <h3>All Product</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Orders</th>
                  <th>User</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  
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