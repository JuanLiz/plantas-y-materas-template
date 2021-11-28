import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import CreateCustomer from "./CreateCustomer";
import swal from "sweetalert"

import 'bootstrap/js/dist/modal'
import 'jquery/dist/jquery.min.js';
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.css"
import $ from 'jquery'; 

import headerimg from '../../assets/img/undraw_people_tax5.svg'

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

    //Para listar clientes
    componentWillMount(){ 
      this.getCustomers()
    }

    getCustomers = () => {
      axios.get('http://localhost:8080/api/customers/')
      .then(res =>{
          console.log(res.data)
          this.setState(
              {customers:res.data}
          )
      })
    }

    //Borrar cliente
    deleteCustomer = (id) => {
      axios.delete('http://localhost:8080/api/customers/customer/'+id)
        .then(res=>{
          this.setState({
            status:'deleted'
          })
          //Notificación exitosa
          swal(
            "Borrado correcto",
            "Cliente borrado exitosamente",
            "success"
          ).then((result) => {
            //Recargar página para ver cambios
            window.location.reload(true)
          })
        })
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
                  </div>{/*End Buttons*/}
      
                  {/* Modals*/}
                  
                  <CreateCustomer />
      
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
                              <th>Acciones</th>
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
                                            <td>  
                                            <Link to={'update/'+customer._id} className=" me-1 align-items-center btn btn-outline-primary">
                                              <i className="uil uil-edit fs-6"></i>
                                            </Link>
                                            <button className="align-items-center btn btn-outline-danger"
                                            onClick= {
                                              () => {
                                                this.deleteCustomer(customer._id)
                                              }
                                            }>
                                              <i className="uil uil-trash-alt fs-6"></i>
                                            </button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                    </table>{/*End Users table*/}
                    {/*Para traer el modal de moidificar usuario */}
                    
                    
                    
                  </div>
      
              </section>
            </div>/*End Main content*/
        )
    }
}

export default Customers