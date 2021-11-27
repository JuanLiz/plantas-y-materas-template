import React from "react";
import axios from 'axios';
import 'bootstrap/js/dist/modal'
import 'jquery/dist/jquery.min.js';
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.css"
import $ from 'jquery'; 

import headerimg from '../assets/img/undraw_people_tax5.svg'

class Customers extends React.Component {
    componentDidMount() {
        //initialize datatable
        $(document).ready(function () {
            $('#dataTable').DataTable();
        });
    }
    
    state = {
        customers:[]
    }
    render(){
        axios.get('http://localhost:8080/api/customers/')
        .then(res =>{
            console.log(res.data)
            this.setState(
                {customers:res.data}
            )
        })
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
      
                  {/*Buttons*/}
                  <div className="d-flex justify-content-center pb-5">
                    <button className="mx-2 align-items-center  btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createModal">
                      <span className="d-block me-1">
                        <i className="uil uil-plus-circle fs-3 lead"></i>
                      </span>
                      <span className="d-block align-middle fw-bold">
                        Agregar cliente
                      </span>
                    </button>
                    <button className="mx-2 align-items-center  btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                      <span className="d-block me-1">
                        <i className="uil uil-check-circle fs-3 lead"></i>
                      </span>
                      <span className="d-block align-middle fw-bold">
                        Actualizar cliente
                      </span>
                    </button>
                    <button className="mx-2 align-items-center btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                      <span className="d-block me-1">
                        <i className="uil uil-times-circle fs-3 lead"></i>
                      </span>
                      <span className="d-block align-middle fw-bold">
                        Eliminar cliente
                      </span>
                    </button>
                  </div>{/*End Buttons*/}
      
                  {/* Modals*/}
                  {/*Create Modal*/}
                  <div className="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Agregar cliente</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="create-clients" method="POST" className="needs-validation" novalidate autocomplete="off">                                     
                          {/*Form fields*/}
                          <div className="modal-body">
                            {/*ID*/}
                            <div className="form-floating mb-3">
                              <input type="number" className="form-control align-middle" id="idclients" name="idclients" placeholder="70041053" required />
                              <label for="floatingId">Cédula de ciudadanía</label>
                              <div id="emailHelp" className="form-text">Este dato no se podrá cambiar mas adelante</div>
                              <div className="invalid-feedback">
                                Proporciona la cédula del cliente
                              </div>
                            </div>
                            {/*Name*/}
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" required />
                              <label for="floatingName">Nombre completo</label>
                              <div className="invalid-feedback">
                                Proporciona el nombre completo
                              </div>
                            </div>
                            {/*Email*/}
                            <div className="form-floating mb-3">
                              <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
                              <label for="floatingEmail">Correo electrónico</label>
                              <div className="invalid-feedback">
                                Proporciona un correo electrónico válido
                              </div>
                            </div>
                            {/*Address*/}
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="address" name="address" placeholder="JohnDoe" required />
                              <label for="floatingUser">Dirección</label>
                              <div className="invalid-feedback">
                                Proporciona una dirección válida
                              </div>
                            </div>
                            {/*Phone*/}
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="phone" name="phone" placeholder="3002485723" required />
                              <label for="floatingPhone">Número de teléfono</label>
                              <div className="invalid-feedback">
                                Proporciona una número de teléfono válido
                              </div>
                            </div>               
                          </div>{/*End Form fields*/}
                          {/*Submit buttons*/}
                          <div className="modal-footer">
                            <button type="button" className="mx-1 align-items-center btn btn-outline-secondary" data-bs-dismiss="modal">
                              <span className="d-block me-2">
                                <i className="uil uil-times fs-4"></i>
                              </span>
                              <span className="d-block align-middle fw-bold">
                                Cancelar
                              </span>
                            </button>
                            <button type="submit" className="mx-1 align-items-center btn btn-outline-primary">
                              <span className="d-block me-2">
                                <i className="uil uil-check fs-4"></i>
                              </span>
                              <span className="d-block align-middle fw-bold">
                                Aceptar
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>{/*End Create Modal*/}
      
                  {/*Update Modal*/}
                  <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Actualizar cliente</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="update-clients" method="POST" className="needs-validation" novalidate autocomplete="off">                                     
                          {/*Form fields*/}
                          <div className="modal-body">
                            {/*ID*/}
                            <div className="form-floating mb-3">
                              <input type="number" className="form-control align-middle" id="idclients" name="idclients" placeholder="70041053" required />
                              <label for="floatingId">Cédula de ciudadanía</label>
                              <div className="invalid-feedback">
                                Proporciona la cédula del cliente
                              </div>
                            </div>
                            {/*Name*/}
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" required />
                              <label for="floatingName">Nombre completo</label>
                              <div className="invalid-feedback">
                                Proporciona el nombre completo
                              </div>
                            </div>
                            {/*Email*/}
                            <div className="form-floating mb-3">
                              <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
                              <label for="floatingEmail">Correo electrónico</label>
                              <div className="invalid-feedback">
                                Proporciona un correo electrónico válido
                              </div>
                            </div>
                            {/*Address*/}
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="address" name="address" placeholder="JohnDoe" required />
                              <label for="floatingUser">Dirección</label>
                              <div className="invalid-feedback">
                                Proporciona una dirección válida
                              </div>
                            </div>
                            {/*Phone*/}
                            <div className="form-floating mb-3">
                              <input type="text" className="form-control" id="phone" name="phone" placeholder="3002485723" required />
                              <label for="floatingPhone">Número de teléfono</label>
                              <div className="invalid-feedback">
                                Proporciona una número de teléfono válido
                              </div>
                            </div>               
                        </div>{/*End Form fields*/}
                          {/*Submit buttons*/}
                          <div className="modal-footer">
                            <button type="button" className="mx-1 align-items-center btn btn-outline-secondary" data-bs-dismiss="modal">
                              <span className="d-block me-2">
                                <i className="uil uil-times fs-4"></i>
                              </span>
                              <span className="d-block align-middle fw-bold">
                                Cancelar
                              </span>
                            </button>
                            <button type="submit" className="mx-1 align-items-center btn btn-outline-primary">
                              <span className="d-block me-2">
                                <i className="uil uil-check fs-4"></i>
                              </span>
                              <span className="d-block align-middle fw-bold">
                                Aceptar
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>{/*End Update Modal*/}
                  
                  {/*Delete Modal*/}
                  <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Eliminar cliente</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="delete-clients" method="POST" className="needs-validation" novalidate autocomplete="off">                                     
                          {/*Form fields*/}
                          <div className="modal-body">
                            {/*ID*/}
                            <div className="form-floating mb-3">
                              <input type="number" className="form-control align-middle" id="id" name="id" placeholder="70041053" required />
                              <label for="floatingId">Cédula de ciudadanía</label>
                              <div className="invalid-feedback">
                                Proporciona la cédula del cliente
                              </div>
                            </div>
                            <p className="text-danger m-1">Esta acción no se puede deshacer. Procede con cuidado</p>              
                        </div>{/*End Form fields*/}
                          {/*Submit buttons*/}
                          <div className="modal-footer">
                            <button type="button" className="mx-1 align-items-center btn btn-outline-secondary" data-bs-dismiss="modal">
                              <span className="d-block me-2">
                                <i className="uil uil-times fs-4"></i>
                              </span>
                              <span className="d-block align-middle fw-bold">
                                Cancelar
                              </span>
                            </button>
                            <button type="submit" className="mx-1 align-items-center btn btn-outline-danger">
                              <span className="d-block me-2">
                                <i className="uil uil-check fs-4"></i>
                              </span>
                              <span className="d-block align-middle fw-bold">
                                Aceptar
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>{/*End Delete Modal*/}            
                  {/*End modals*/}
      
                  {/*Users table*/}            
                  <div className="p-2 mx-auto">
                    <table id="dataTable" className="w-100 table table-responsive table-striped">
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
                                            <td>{customer.phome}</td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                    </table>{/*End Users table*/}
                  </div>
      
              </section>
            </div>/*End Main content*/
        )
    }
}

export default Customers