import React from "react";
import axios from 'axios';
import {Link } from "react-router-dom"
import swal from "sweetalert"
import CreateProduct from "./CreateProduct";

import 'bootstrap/js/dist/modal'
import 'jquery/dist/jquery.min.js';
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.css"
import $ from 'jquery'; 

import headerimg from '../../../assets/img/undraw_Order.svg'

class Products extends React.Component {
    //Inicializar Datatable
    componentDidMount() {
        $(document).ready(function () {
            $('#dataTable').DataTable();
        });
    }
  
    //Guardar productos obtenidos
    state = {
        products:[]
    }

    //Para agregar producto
    componentWillMount(){ 
      this.getProducts()
    }

    getProducts = () => {
      axios.get('http://localhost:8080/api/products/')
      .then(res =>{
          const products = res.data
          this.setState(
              //Productos filtrados por ciudad
              {products:products.filter(product => product.city.includes('BOG'))}
          )
      })
    }

        //Borrar cliente
        deleteProduct = (id) => {
          axios.delete('http://localhost:8080/api/products/product/'+id)
            .then(res=>{
              this.setState({
                status:'deleted'
              })
              //Notificación exitosa
              swal(
                "Borrado correcto",
                "Producto borrado exitosamente",
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
                      <h1 className="mb-0">Gestión de productos</h1>
                    </div>
                    <div className="col-md-4 g-0 my-auto">
                      {/*Illustration*/}
                      <div className=" d-flex me-2 justify-content-end">
                        <img className="big" src={headerimg} alt="" width="240" />
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
                        Agregar productos 
                      </span>
                    </button>
                    {/*Upload products pending to do 
                    <button className="mx-2 align-items-center  btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#uploadModal">
                      <span className="d-block me-1">
                        <i className="uil uil-file-upload fs-3 lead"></i>
                      </span>
                      <span className="d-block align-middle fw-bold">
                        Cargar productos
                      </span>
                    </button>
                    */}
                  </div>{/*End Buttons*/}

                  <CreateProduct />

                  {/* Modals*/}
                  {/*Upload Modal*/}
                  <div className="modal fade" id="uploadModal" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Cargar productos</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="POST" className="needs-validation" novalidate autocomplete="off">                 
                          {/*Form fields*/}
                          <div className="modal-body">
                            {/*Upload input*/}
                            <div className="mb-3">
                              <label for="formFile" className="form-label">
                                Sube un archivo separado por comas (CSV) con los siguientes campos requeridos:
                                <ul>
                                  <br />
                                  <li>Código de producto <i>(Número, máximo 20 dígitos)</i></li>
                                  <li>NIT del proveedor <i>(Número, máximo 20 dígitos)</i></li>
                                  <li>Nombre de producto <i>(Texto, máximo 255 caracteres)</i></li>
                                  <li>IVA <i>(Número)</i></li>
                                  <li>Precio de compra (Número)</li>
                                  <li>Precio de venta (Número)</li>
                                </ul> 
                                <br />
                                También puedes descargar la <b>plantilla de archivo</b>
                              </label>
                              <input className="form-control" type="file" id="formFile" accept="text/csv" required />
                              <div className="invalid-feedback">
                                Sube un archivo válido
                              </div>
                            </div>             
                          </div>{/*End Form fields*/}
                          {/*Submit buttons*/}
                          <div className="modal-footer">
                            <a href="template.csv" className="me-auto align-items-center btn btn-outline-secondary" role="button">
                              <span className="d-block me-2">
                                <i className="uil uil-file-download fs-4"></i>
                              </span>
                              <span className="d-block align-middle fw-bold">
                                Plantilla
                              </span>
                            </a>
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
      
                  {/*Users table*/}            
                  <div className="p-2 mx-auto">
                    <table className=" w-100 table table-responsive table-striped">
                      <thead>
                          <tr>
                              <th>Código</th>
                              <th>NIT</th>
                              <th>Producto</th>
                              <th>%IVA</th>
                              <th>Precio compra</th>
                              <th>Precio venta</th>
                              <th>Acciones</th>
                          </tr>
                      </thead>
                    {/*Traer productos del API*/}
                      <tbody>
                        {
                            this.state.products.map((product)=>{
                                return(
                                    <React.Fragment>
                                        <tr>
                                            <td>{product.idproduct}</td>
                                            <td>{product.idprovider}</td>
                                            <td>{product.name}</td>
                                            <td>{product.vat}</td>
                                            <td>{product.buyprice}</td>                                       
                                            <td>{product.sellprice}</td>
                                            <td>  
                                            <Link to={'update/'+product._id} className=" me-1 align-items-center btn btn-outline-primary">
                                              <i className="uil uil-edit fs-6"></i>
                                            </Link>
                                            <button className="align-items-center btn btn-outline-danger"
                                            onClick= {
                                              () => {
                                                this.deleteProduct(product._id)
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
                  </div>
      
              </section>

            </div>/*End Main content*/
        )
    }
}

export default Products