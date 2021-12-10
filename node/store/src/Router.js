import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App';
//Bogota
import SidebarBog from "./components/SidebarBog";
import Home from './components/Home'
import ProductsBog from './components/bogota/products/Products';
import CustomersBog from './components/bogota/customers/Customers';
import UpdateCustomerBog from "./components/bogota/customers/UpdateCustomer";
import UpdateProductBog from "./components/bogota/products/UpdateProduct";
import SalesBog from "./components/bogota/sales/Sales";
import ReportsBog from "./components/bogota/Reports";
import Summary from "./components/bogota/Summary"
//Medellín
import SidebarMed from "./components/SidebarMed";
import ProductsMed from './components/medellin/products/Products';
import CustomersMed from './components/medellin/customers/Customers';
import UpdateCustomerMed from "./components/medellin/customers/UpdateCustomer";
import UpdateProductMed from "./components/medellin/products/UpdateProduct";
import SalesMed from "./components/medellin/sales/Sales";
import ReportsMed from "./components/medellin/Reports";
//Cali
import SidebarCal from "./components/SidebarCal";
import ProductsCal from './components/cali/products/Products'
import CustomersCal from './components/cali/customers/Customers';
import UpdateCustomerCal from "./components/cali/customers/UpdateCustomer";
import UpdateProductCal from "./components/cali/products/UpdateProduct";
import SalesCal from "./components/cali/sales/Sales";
import ReportsCal from "./components/cali/Reports";

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>} >
                        {/*Bogota*/}
                        <Route path='bogota' element={<SidebarBog/>}>
                            <Route path='home' element={<Home />} />
                            <Route path='products' element={<ProductsBog/>} />
                            <Route path='products/update/:id' element={<UpdateProductBog/>} />
                            <Route path='customers' element={<CustomersBog/>} />
                            <Route path='customers/update/:id' element={<UpdateCustomerBog/>} />
                            <Route path='sales' element={<SalesBog/>} />
                            <Route path='reports' element={<ReportsBog/>} />
                            <Route path='summary' element={<Summary/>} />
                        </Route>
                        {/*Medellin*/}
                        <Route path='medellin' element={<SidebarMed/>}>
                            <Route path='home' element={<Home />} />
                            <Route path='products' element={<ProductsMed/>} />
                            <Route path='products/update/:id' element={<UpdateProductMed/>} />
                            <Route path='customers' element={<CustomersMed/>} />
                            <Route path='customers/update/:id' element={<UpdateCustomerMed/>} />
                            <Route path='sales' element={<SalesMed/>} />
                            <Route path='reports' element={<ReportsMed/>} />
                        </Route>
                        {/*Cali*/}
                        <Route path='cali' element={<SidebarCal/>}>
                            <Route path='home' element={<Home />} />
                            <Route path='products' element={<ProductsCal/>} />
                            <Route path='products/update/:id' element={<UpdateProductCal/>} />
                            <Route path='customers' element={<CustomersCal/>} />
                            <Route path='customers/update/:id' element={<UpdateCustomerCal/>} />
                            <Route path='sales' element={<SalesCal/>} />
                            <Route path='reports' element={<ReportsCal/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router