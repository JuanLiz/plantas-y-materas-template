import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import swal from "sweetalert"

import 'bootstrap/js/dist/modal'
import 'jquery/dist/jquery.min.js';
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.css"
import $ from 'jquery'; 

import headerimg from '../../assets/img/undraw_empty_cart.svg'

class Sales extends React.Component {


    render(){
      
        return(
            /*Main content*/
            <div className="content p-4">
              
              <section className="mainc">
                  
                  {/*Welcome*/}
                  <div className="row pb-5 align-items-center">
                    <div className="col-md-8 align-items-center align-middle">
                      <h1 className="mb-0">Gestión de ventas</h1>
                    </div>
                    <div className="col-md-4 g-0 my-auto">
                      {/*Illustration*/}
                      <div className=" d-flex me-2 justify-content-end">
                        <img className="big" src={headerimg} alt="" width="230" />
                      </div>
                    </div>
                  </div>
                  {/*Main Content form*/}
                    <div className="py-4">
                    <form action="create-products" method="POST" className="needs-validation" onSubmit={this.create_product} novalidate autocomplete="off">                                     
                        <div className="d-flex mb-3">
                            <div className="form-floating col-8 me-3">
                            <input className="form-control" list="datalistOptions" id="DataList" placeholder="Type to search..." />
                            <datalist id="datalistOptions">
                                <option value="San Francisco" />
                                <option value="New York" />
                                <option value="Seattle" />
                                <option value="Los Angeles" />
                                <option value="Chicago" />
                            </datalist>
                            <label for="DataList">Cliente</label>
                            </div>
                            <button className="align-items-center col-4 btn btn-outline-primary" type="submit">
                                <span className="d-block me-1">
                                    <i className="uil uil-shopping-basket fs-3 lead"></i>
                                </span>
                                <span className="d-block align-middle fw-bold">
                                    Registrar venta 
                                </span>
                            </button>
                        </div>
                        {/*Add Products*/}
                        <div className="nomargin row gx-0 py-3">
                            <div className="col-md-9 pe-3">
                                <h5 className="pb-3">Producto</h5>
                                    <input className="form-control mb-3" list="datalist1Options" id="DataList1" placeholder="Busca o selecciona un producto..." />
                                    <datalist id="datalist1Options">
                                        <option value="San Francisco" />
                                        <option value="New York" />
                                        <option value="Seattle" />
                                        <option value="Los Angeles" />
                                        <option value="Chicago" />
                                    </datalist>
                                    <input className="form-control mb-3" list="datalist1Options" id="DataList2" placeholder="Busca o selecciona un producto..." />
                                    <datalist id="datalist2Options">
                                        <option value="San Francisco" />
                                        <option value="New York" />
                                        <option value="Seattle" />
                                        <option value="Los Angeles" />
                                        <option value="Chicago" />
                                    </datalist>
                                    <input className="form-control mb-3" list="datalist1Options" id="DataList3" placeholder="Busca o selecciona un producto..." />
                                    <datalist id="datalist3Options">
                                        <option value="San Francisco" />
                                        <option value="New York" />
                                        <option value="Seattle" />
                                        <option value="Los Angeles" />
                                        <option value="Chicago" />
                                    </datalist>
                            </div>
                            <div className="col-md-1 pe-3 justify-content-center">
                                <h5 className="pb-3 text-center">Cant.</h5>
                                <input type="number" class="form-control mb-3" id="amount"/>
                                <input type="number" class="form-control mb-3" id="amount"/>
                                <input type="number" class="form-control mb-3" id="amount"/>
                            </div>
                            <div className="col-md-2 text-center">
                                <h5 className="pb-4">Valor total</h5>
                                <span className="d-block fs-5 pb-3">$25600</span>
                                <span className="d-block fs-5 py-3">$25600</span>
                                <span className="d-block fs-5 py-3">$25600</span>
                            </div>
                        </div>{/*End Add Products*/}
                        {/*Totals*/}
                        <div className="nomargin row py-3">
                            <div className="col-md-7"></div>
                            <div className="col-md-3 text-end">
                                <h5><i>Subtotal</i></h5>
                                <h5><i>IVA</i></h5>
                                <h5 className="pcolor"><i>Total a pagar</i></h5>
                            </div>
                            <div className="col-md-2 text-center">
                                <h5>$345000</h5>
                                <h5>$25000</h5>
                                <h5 className="pcolor">$370000</h5>
                            </div>
                        </div>
                        {/*End totals*/}
                    </form>
                  </div>{/*End Main Content form*/}
      
              </section>
            </div>/*End Main content*/
        )
    }
}

export default Sales