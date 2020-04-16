import React, {Component} from 'react';

import axios from 'axios';


export default class EditProduct extends Component{
  
    constructor(props){
        super(props);
        
        
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAmount=this.onChangeAmount.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       this.state={
            name:"",
            price:0,
            id:"",
            img:"",
            desc:""
        }
     

    }

    componentDidMount() {
        axios.get('https://grocer-server.herokuapp.com/api/products/'+this.props.match.params.id)
          .then(response => {
            this.setState({
            name:response.data.name,
            price:response.data.price,
            id:response.data.id,
            img:response.data.img,
            desc:response.data.desc
            })
            console.log(response    );
          })
          .catch(function (error) {
            console.log(error);
          })

        }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }
    onChangeAmount(e){
        this.setState({
            price:e.target.value
        })
    }
    onChangeImg(e) {
        this.setState({
            img: e.target.value
        })
    }

    onChangeDesc(e) {
        this.setState({
            desc: e.target.value
        })
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        console.log(this.state.pname);
        const product={
           
            
            id:this.state.id,
            name: this.state.name,
            desc:this.state.desc,
            price: this.state.price,
            img:this.state.img
          
            
        }
        
       // console.log(store);
        axios.put('https://grocer-server.herokuapp.com/api/products/'+this.props.match.params.id,product)
        .then(res=>console.log(res.data));
        //this will send to home page
        window.location="/productList";
    }
    render()
    {
        return(
            <div>
                <h3>Update Products</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group">
          <label>Amount: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeAmount}
              />
        </div>
        <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.desc}
                            onChange={this.onChangeDesc}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image Url: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.img}
                            onChange={this.onChangeImg}
                        />
                    </div>
                    <div className="form-group">
                        <label>id: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.id}
                            onChange={this.onChangeId}
                        />
                    </div>
        <div className="form-group">
          <input type="submit" value="Update Product" className="btn btn-primary" />
        </div>
      </form>
            </div>
            
        )
    }
}