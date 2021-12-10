import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import "bootstrap/js/dist/collapse"

import 'bootstrap/js/dist/modal'
import 'jquery/dist/jquery.min.js';
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.css"
import $ from 'jquery'; 

import headerimg from '../assets/img/undraw_people_tax5.svg'

class Reports extends React.Component {
    componentDidMount() {
        //initialize datatable
        $(document).ready(function () {
            $('#dataTable').DataTable();
        });
    }
    
    state = {
        customers:[],
        sales: [],
        salespercustomer: []
    }

    //Para listar cliente
    componentWillMount(){ 
      this.getCustomers()
      this.getSales()
    }

    getCustomers = () => {
      axios.get('http://localhost:8080/api/customers/')
      .then(res =>{
        const customers = res.data
          this.setState(
              //Clientes filtrados por ciudad
              {customers:customers.filter(customer => customer.city.includes('BOG'))}
          )
        this.salespercustomer()
      })
    }

    getSales = () => {
      axios.get('http://localhost:8080/api/sales/')
      .then(res =>{
        const sales = res.data
        console.log(sales)
          this.setState(
              //Clientes filtrados por ciudad
              {sales:sales.filter(sale => sale.city.includes('BOG'))}
          )
      })
    }

    salespercustomer = () => {
      //Obtener nombre e ID de los clientes
      var fcustomers = this.state.customers.map(customer => ({
        idcustomer:customer.idcustomer, name:customer.name
      }))
      var sales = this.state.sales
      //Recorrer los clientes y agrupar ventas por cada uno
      var salespercustomer = fcustomers.map(customer => ({
        //Se ubica el id y el nombre del arreglo anterior
        idcustomer:customer.idcustomer,
        name:customer.name,
        //Se filtra el total de ventas por cliente
        totalsales:sales.filter(sale => sale.idcustomer.includes(customer.idcustomer))
      }))
      //Se remapea el arreglo que se lleva. Se ubica el ID y el nombre, pero se extrae
      //el total de cada venta para posteriormente sumarlo
      .map(sale => ({
        idcustomer:sale.idcustomer, 
        name: sale.name,
        totalsales:sale.totalsales.map(sale => (sale.total)).map(total => (total))
        //Se hace la suma de los totales y se almacena
        .reduce((sum, total) => sum+total, 0)
      }))
      this.setState({salespercustomer:salespercustomer})
    }

    render(){
      
        return(
            /*Main content*/
            <div className="content p-4">
              
              <section className="mainc">
                  
                  {/*Welcome*/}
                  <div className="row pb-5 align-items-center">
                    <div className="col-md-8 align-items-center align-middle">
                      <h1 className="mb-0">Gestión de clientes</h1>
                    </div>
                    <div className="col-md-4 g-0 my-auto">
                      {/*Illustration*/}
                      <div className=" d-flex me-2 justify-content-end">
                        <img className="big" src={headerimg} alt="" width="230" />
                      </div>
                    </div>
                  </div>

                  <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Listado de clientes
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {/*Users table*/}            
                        <div className="p-2 mx-auto">
                          <table className=" table table-responsive table-striped">
                            <thead>
                                <tr>
                                    <th>Cédula</th>
                                    <th>E-mail</th>
                                    <th>Nombre</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                </tr>
                            </thead>
                            {/*Traer clientes del API*/}
                          <tbody>
                            {
                                  this.state.customers.map((customer)=>{
                                      return(
                                          <React.Fragment>
                                              <tr>
                                                  <td>{customer.idcustomer}</td>
                                                  <td>{customer.email}</td>
                                                  <td>{customer.name}</td>
                                                  <td>{customer.address}</td>                                       
                                                  <td>{customer.phone}</td>
                                              </tr>
                                          </React.Fragment>
                                      )
                                  })
                            }
                          </tbody>
                          </table>{/*End Users table*/}
                          {/*Para traer el modal de moidificar usuario */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Ventas por cliente
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                  {/*Sales per customer table*/}            
                  <div className="p-2 mx-auto">
                        <table className=" table table-responsive table-striped">
                          <thead>
                              <tr>
                                  <th>Cédula</th>
                                  <th>Nombre</th>
                                  <th>Total de ventas</th>
                              </tr>
                          </thead>
                          {/*Traer ventas por cliente de la función*/}
                        <tbody>
                          {
                                  this.state.salespercustomer.map((customer)=>{
                                      return(
                                          <React.Fragment>
                                              <tr>
                                                  <td>{customer.idcustomer}</td>
                                                  <td>{customer.name}</td>
                                                  <td>{'$'+customer.totalsales}</td>
                                              </tr>
                                          </React.Fragment>
                                      )
                                  })
                                }
                        </tbody>
                        </table>{/*End Sales per Client table*/}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

      
              </section>
            </div>/*End Main content*/
        )
    }
}

export default Reports