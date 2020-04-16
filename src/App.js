import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ProductList from "./components/product-list.component";
import CreateProduct from "./components/create-product.component";
import EditProduct from "./components/edit-product.component";
import OrderList from "./components/order-list.component";
import Login from "./components/login.component"

function App() {
    return (
        <Router>
            <Navbar/>
            <br/>
            <Route path="/" exact component={Login}></Route>
            <Route path="/productList" exact component={ProductList}></Route>
            {/* <Route path="/productList" exact component={ProductList}></Route> */}
            <Route path="/createProduct" component={CreateProduct} /> 
            <Route path="/editProduct/:id" component={EditProduct} />
            <Route path="/orderList" component={OrderList} />
        </Router>
    );
}

export default App;
