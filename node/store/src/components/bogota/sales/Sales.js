import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import swal from "sweetalert"

import 'bootstrap/js/dist/modal'
import 'jquery/dist/jquery.min.js';
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.css"

import headerimg from '../../../assets/img/undraw_empty_cart.svg'

class Sales extends React.Component {

        idcustomer = React.createRef()
        product1 = React.createRef()
        product2 = React.createRef()
        product3 = React.createRef()
        amount1 = React.createRef()
        amount2 = React.createRef()
        amount3 = React.createRef()

        //Guardar obtenidos
        state = {
            status: null,
            products:[],
            customers:[],
            idsale: null,
            vat1: null,
            vat2: null,
            vat3: null,
            totalvat1: null,
            totalvat2: null,
            totalvat3: null,
            subtotal1: null,
            subtotal2: null,
            subtotal3: null,
            total1: null,
            total2: null,
            total3: null,
            subtotal: null,
            totalvat: null,
            total: null,
        }
    
        //Para agregar producto
        componentWillMount(){ 
          this.getCustomers()
          this.getProducts()
          this.getSalesLength()
        }

    
        getProducts = () => {
          axios.get('http://localhost:8080/api/products/')
          .then(res =>{
              const products = res.data
              this.setState({
                  //Productos filtrados por ciudad
                    products:products.filter(product => product.city.includes('BOG')),
                }
              )
          })
        }
        
        getSalesLength = () => {
            axios.get('http://localhost:8080/api/sales/')
            .then(res =>{
                const sales = res.data
                this.setState({
                      idsale: sales.length+1
                  }
                )
            })
          }

        getCustomers = () => {
            axios.get('http://localhost:8080/api/customers/')
            .then(res =>{
              const customers = res.data
                this.setState(
                    //Clientes filtrados por ciudad
                    {customers:customers.filter(customer => customer.city.includes('BOG'))}
                )
            })
          }

        //Totales
        totals = () => {
            let subtotal = this.state.subtotal1 + this.state.subtotal2 + this.state.subtotal3
            let totalvat = this.state.totalvat1 + this.state.totalvat2 + this.state.totalvat3
            let total = Math.trunc(subtotal+totalvat)
            this.setState({
                subtotal:subtotal,
                totalvat:totalvat,
                total:total
             }) 
        }

        //Añadir venta a la base de datos
        create_sale = (e) => {
            e.preventDefault()
            //Datos tomados desde el formulario 
            var sale = {
            idcustomer: this.idcustomer.current.value,
            idsale: this.state.idsale,
            saledetail: [
                {
                    amount: this.amount1.current.value,
                    idproduct: this.product1.current.value,
                    subtotal: this.state.subtotal1,
                    vat: this.state.vat1,
                    total: this.state.total1,
                },
                {
                    amount: this.amount2.current.value,
                    idproduct: this.product2.current.value,
                    subtotal: this.state.subtotal2,
                    vat: this.state.vat2,
                    total: this.state.total2,
                },
                {
                    amount: this.amount3.current.value,
                    idproduct: this.product3.current.value,
                    subtotal: this.state.subtotal3,
                    vat: this.state.vat3,
                    total: this.state.total3,
                }
            ],
            subtotal: this.state.subtotal,
            vat: this.state.totalvat,
            total: this.state.total,
            city: 'BOG'
            }
        
            console.log(sale)
            //Axios envía los datos a la API por POST
            axios.post('http://localhost:8080/api/sales/sale', sale)
            .then(res => {
                //Comprobar la respuesta para el tipo de aviso
                if(res.data){
                    this.setState({
                        status:'success'
                    })
                } 
                else {
                    this.setState({
                        status:'fail'
                    })
                }
            })
        }

        //Suma de primer producto
        fsum = (e) => {
                const products = this.state.products
                const product = products.filter(product => product.idproduct.includes(this.product1.current.value))
                console.log(product[0])
                let sellprice = product[0].sellprice
                let amount = this.amount1.current.value
                let vat = product[0].vat
                let totalvat = Math.trunc((sellprice/100*product[0].vat)*amount)
                let subtotal = Math.trunc(sellprice*amount)
                let total = Math.trunc(subtotal+totalvat)
                this.setState({
                   subtotal1:subtotal,
                   total1:total,
                   vat1: vat,
                   totalvat1:totalvat
                })

        }

        //Suma de segundo proucto
        ssum = (e) => {
            const products = this.state.products
            const product = products.filter(product => product.idproduct.includes(this.product2.current.value))
            console.log(product[0])
            let sellprice = product[0].sellprice
            let amount = this.amount2.current.value
            let vat = product[0].vat
            let totalvat = Math.trunc((sellprice/100*product[0].vat)*amount)
            let subtotal = Math.trunc(sellprice*amount)
            let total = Math.trunc(subtotal+totalvat)
            this.setState({
               subtotal2:subtotal,
               total2:total,
               vat2: vat,
               totalvat2: totalvat
            })
        }    
        
        //Suma de tercer producto
        tsum = (e) => {
            const products = this.state.products
            const product = products.filter(product => product.idproduct.includes(this.product3.current.value))
            console.log(product[0])
            let sellprice = product[0].sellprice
            let amount = this.amount3.current.value
            let vat = product[0].vat
            let totalvat = Math.trunc((sellprice/100*product[0].vat)*amount)
            let subtotal = Math.trunc(sellprice*amount)
            let total = Math.trunc(subtotal+totalvat)
            this.setState({
               subtotal3: subtotal,
               total3:total,
               vat3: vat,
               totalvat3:totalvat
            })
        }           


    render(){
        //Mostrar notificación
        if (this.state.status==='success'){
            //Notificación exitosa
            swal(
              "Registro correcto",
              "Venta registrada exitosamente",
              "success"
            ).then((result) => {
              //Recargar página para ver cambios
              window.location.reload(true)
            })
          }        
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
                    <form action="create-sales" method="POST" className="needs-validation" onSubmit={this.create_sale} novalidate autocomplete="off">                                     
                        <div className="d-flex mb-3">
                            <div className="form-floating col-7 me-2">
                            <select name="customer" class="form-select" id="DataList" ref={this.idcustomer} aria-label="Default select example">
                                    <option selected>Selecciona un cliente...</option>
                                    {
                                        this.state.customers.map((customer)=>{
                                            return(
                                                <React.Fragment>
                                                    <option value ={customer.idcustomer}>{customer.name}</option>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </select>
                            <label for="DataList">Cliente</label>
                            </div>
                            <div className="form-floating col-2 me-2">
                            <input class="form-control" type="text" id="consec" value={this.state.idsale} aria-label="Disabled input example" disabled />

                            <label for="consec">Venta No.</label>
                            </div>
                            <button className="align-items-center col-3 btn btn-outline-primary" type="submit">
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
                                <select name="product1" class="form-select mb-3" aria-label="Default select example" ref={this.product1} onChange={this.fsum} onBlur={this.totals}>
                                    <option selected>Selecciona un producto...</option>
                                    {
                                        this.state.products.map((product)=>{
                                            return(
                                                <React.Fragment>
                                                    <option value ={product.idproduct}>{"("+product.idproduct+") "+product.name}</option>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </select>
                                <select name="product2" class="form-select mb-3" aria-label="Default select example" ref={this.product2} onChange={this.ssum} onBlur={this.totals}>
                                    <option selected>Selecciona un producto...</option>
                                    {
                                        this.state.products.map((product)=>{
                                            return(
                                                <React.Fragment>
                                                    <option value ={product.idproduct}>{"("+product.idproduct+") "+product.name}</option>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </select>
                                <select name="product3" class="form-select mb-3" aria-label="Default select example" ref={this.product3} onChange={this.tsum} onBlur={this.totals}>
                                    <option selected>Selecciona un producto...</option>
                                    {
                                        this.state.products.map((product)=>{
                                            return(
                                                <React.Fragment>
                                                    <option value ={product.idproduct}>{"("+product.idproduct+") "+product.name}</option>
                                                    
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                            <div className="col-md-1 pe-3 justify-content-center">
                                <h5 className="pb-3 text-center">Cant.</h5>
                                <input type="number" min="0" class="form-control mb-3" id="amount1"  ref={this.amount1} onChange={this.fsum} onBlur={this.totals}/>
                                <input type="number" min="0" class="form-control mb-3" id="amount2"  ref={this.amount2} onChange={this.ssum} onBlur={this.totals}/>
                                <input type="number" min="0" class="form-control mb-3" id="amount3"  ref={this.amount3} onChange={this.tsum} onBlur={this.totals}/>
                            </div>
                            <div className="col-md-2 text-center">
                                <h5 className="pb-4">Valor total</h5>
                                <span className="d-block fs-5 pb-3">${this.state.subtotal1}</span>
                                <span className="d-block fs-5 py-3">${this.state.subtotal2}</span>
                                <span className="d-block fs-5 py-3">${this.state.subtotal3}</span>
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
                                <h5>${this.state.subtotal}</h5>
                                <h5>${this.state.totalvat}</h5>
                                <h5 className="pcolor">${this.state.total}</h5>
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