import React, {Component} from 'react';

import axios from 'axios';


export default class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: "",
            price: 0,
            id:"",
            img:"",
            desc:""
        }


    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeAmount(e) {
        this.setState({
            price: e.target.value
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


    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.pname);
        const product = {
            id:this.state.id,
            name: this.state.name,
            desc:this.state.desc,
            price: this.state.price,
            img:this.state.img

            

        }

        // console.log(store);
        axios.post('https://grocer-server.herokuapp.com/api/products', product)
            .then(res => console.log(res.data));
        //this will send to home page
        window.location="/";
    }

    render() {
        return (
            <div>
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
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
                        <input type="submit" value="Add Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        )
    }
}