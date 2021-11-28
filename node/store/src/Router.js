import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App';
import Sidebar from "./components/Sidebar";
import Home from './components/Home'
import Products from './components/products/Products'
import Customers from './components/customers/Customers';
import UpdateCustomer from "./components/customers/UpdateCustomer";
import UpdateProduct from "./components/products/UpdateProduct";


class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>} >
                        <Route path='city' element={<Sidebar />}>
                            <Route path='home' element={<Home />} />
                            <Route path='products' element={<Products/>} />
                            /*<Route path='products/update/:id' element={<UpdateProduct/>} />*/
                            <Route path='customers' element={<Customers />} />
                            <Route path='customers/update/:id' element={<UpdateCustomer/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router