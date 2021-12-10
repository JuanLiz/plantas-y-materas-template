import React from "react";
import axios from 'axios';
import swal from "sweetalert"
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";

class UpdateProduct extends React.Component {
  
//Refs para almacenar campos
_id = null
path = null
url = []
idproduct = React.createRef()
name = React.createRef()
idprovider = React.createRef()
vat = React.createRef()
buyprice = React.createRef()
sellprice = React.createRef()

//State, bien o mal?
state = {
    product:[],
    status: null
}

    //Para listar clientes
    componentWillMount(){ 
      this.path = window.location.pathname
      this.url = this.path.split('/')
      console.log(this.url)
      this._id = this.url[4]
      this.getProduct(this._id)
      
    }

    getProduct = (id) => {
      axios.get('http://localhost:8080/api/products/product/'+id)
      .then(res =>{
          console.log(res.data)
          this.setState(
              {product:res.data}
          )
      })
    }


//Actualizar cliente a la base de datos
update_product = (e) => {
  e.preventDefault()
  //Datos tomados desde el formulario 
  var product = {
    _id: this._id,
    idproduct: this.idproduct.current.value,
    name: this.name.current.value,
    idprovider: this.idprovider.current.value,
    vat: this.vat.current.value,
    buyprice: this.buyprice.current.value,
    sellprice: this.sellprice.current.value,
    city: 'BOG'
  }


  console.log(product)
  //Axios envía los datos a la API por POST
  axios.put('http://localhost:8080/api/products/product/'+this._id, product)
    .then(res => {
        //Comprobar la respuesta para el tipo de aviso
        if(res.data){
            this.setState({
                status:'success'
            })
        } 
    })
}

    render(){
        //Mostrar notificación
        if (this.state.status==='success'){
          swal(
            "Actualización correcta",
            "Producto actualizado exitosamente",
            "success"
          )
          return (
              //Volver a pagina anterior
              <Navigate to='/bogota/products'/>
          )
        }
         
        return(
            /*Update Modal*/
            <form action="update-products" method="POST" className=" container needs-validation" onSubmit={this.update_product} novalidate autocomplete="off">                                     
                  
                  {/*Form fields*/}
                  <div className="modal-body">
                  <h2 className="py-5 ">Actualizar producto</h2>
                    {/*ID*/}
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control align-middle" name="idproduct" ref={this.idproduct} defaultValue={this.state.product.idproduct} placeholder="70041053" required />
                      <label for="floatingId">Código del producto</label>
                      <div className="invalid-feedback">
                        Proporciona el código del producto
                      </div>
                    </div>
                    {/*NIT*/}
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" name="idprovider" ref={this.idprovider} defaultValue={this.state.product.idprovider} placeholder="name@example.com" required />
                      <label for="floatingEmail">NIT del proveedor</label>
                      <div className="invalid-feedback">
                        Proporciona un NIT del proveedor válido
                      </div>
                    </div>                    
                    {/*Name*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="name" ref={this.name} defaultValue={this.state.product.name} placeholder="John Doe" required />
                      <label for="floatingName">Nombre</label>
                      <div className="invalid-feedback">
                        Proporciona el nombre
                      </div>
                    </div>

                    {/*VAT*/}
                    <div className="form-floating mb-3">
                      <input type="number" step="0.001" className="form-control" name="vat" ref={this.vat} defaultValue={this.state.product.vat} placeholder="JohnDoe" required />
                      <label for="floatingUser">%IVA</label>
                      <div className="invalid-feedback">
                        Proporciona un porcentaje de IVA válido
                      </div>
                    </div>
                    {/*Buy price*/}
                    <div className="form-floating mb-3">
                      <input type="number" step="0.001" className="form-control" name="buyprice" ref={this.buyprice} defaultValue={this.state.product.buyprice} placeholder="3002485723" required />
                      <label for="floatingPhone">Precio de compra</label>
                      <div className="invalid-feedback">
                        Proporciona una precio de compra válido
                      </div>
                    </div>
                    {/*Sell price*/}
                    <div className="form-floating mb-3">
                      <input type="number" step="0.001" className="form-control" name="buyprice" ref={this.sellprice} defaultValue={this.state.product.sellprice} placeholder="3002485723" required />
                      <label for="floatingPhone">Precio de venta</label>
                      <div className="invalid-feedback">
                        Proporciona una precio de venta válido
                      </div>
                    </div>               
                  </div>{/*End Form fields*/}
                  {/*Submit buttons*/}
                  <div className="modal-footer">
                    <NavLink to="/bogota/products" type="button" className="mx-1 align-items-center btn btn-outline-secondary">
                      <span className="d-block me-2">
                        <i className="uil uil-times fs-4"></i>
                      </span>
                      <span className="d-block align-middle fw-bold">
                        Cancelar
                      </span>
                    </NavLink>
                    <button type="submit" className="mx-1 align-items-center btn btn-outline-primary">
                      <span className="d-block me-2">
                        <i className="uil uil-check fs-4"></i>
                      </span>
                      <span className="d-block align-middle fw-bold">
                        Aceptar
                      </span>
                    </button>
                  </div>
                </form>/*End Update Modal*/
        )
    }
}

export default UpdateProduct