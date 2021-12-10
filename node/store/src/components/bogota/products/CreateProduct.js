import React from "react";
import axios from 'axios';
import 'bootstrap/js/dist/modal'
import swal from "sweetalert"

class CreateProduct extends React.Component {
//Refs para almacenar campos
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

//Añadir producto a la base de datos
create_product = (e) => {
  e.preventDefault()
  //Datos tomados desde el formulario 
  var product = {
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
  axios.post('http://localhost:8080/api/products/product', product)
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

    render(){
        //Mostrar notificación
        if (this.state.status==='success'){
          //Notificación exitosa
          swal(
            "Registro correcto",
            "Producto añadido exitosamente",
            "success"
          ).then((result) => {
            //Recargar página para ver cambios
            window.location.reload(true)
          })
        }

        
        return(
            /*Create Modal*/
            <div className="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Agregar producto</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="create-products" method="POST" className="needs-validation" onSubmit={this.create_product} novalidate autocomplete="off">                                     
                  {/*Form fields*/}
                  <div className="modal-body">
                    {/*ID*/}
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control align-middle" name="idproduct" ref={this.idproduct} placeholder="70041053" required />
                      <label for="floatingId">Código del producto</label>
                      <div className="invalid-feedback">
                        Proporciona el código del producto
                      </div>
                    </div>
                    {/*NIT*/}
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" name="idprovider" ref={this.idprovider} placeholder="name@example.com" required />
                      <label for="floatingEmail">NIT del proveedor</label>
                      <div className="invalid-feedback">
                        Proporciona un NIT del proveedor válido
                      </div>
                    </div>                    
                    {/*Name*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="name" ref={this.name} placeholder="John Doe" required />
                      <label for="floatingName">Nombre</label>
                      <div className="invalid-feedback">
                        Proporciona el nombre
                      </div>
                    </div>

                    {/*VAT*/}
                    <div className="form-floating mb-3">
                      <input type="number" step="0.001" className="form-control" name="vat" ref={this.vat} placeholder="JohnDoe" required />
                      <label for="floatingUser">%IVA</label>
                      <div className="invalid-feedback">
                        Proporciona un porcentaje de IVA válido
                      </div>
                    </div>
                    {/*Buy price*/}
                    <div className="form-floating mb-3">
                      <input type="number" step="0.001" className="form-control" name="buyprice" ref={this.buyprice} placeholder="3002485723" required />
                      <label for="floatingPhone">Precio de compra</label>
                      <div className="invalid-feedback">
                        Proporciona una precio de compra válido
                      </div>
                    </div>
                    {/*Sell price*/}
                    <div className="form-floating mb-3">
                      <input type="number" step="0.001" className="form-control" name="buyprice" ref={this.sellprice} placeholder="3002485723" required />
                      <label for="floatingPhone">Precio de venta</label>
                      <div className="invalid-feedback">
                        Proporciona una precio de venta válido
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
                    <button type="submit" className="mx-1 align-items-center btn btn-outline-primary" data-bs-dismiss="modal">
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
          </div>/*End Create Modal*/
        )
    }
}

export default CreateProduct