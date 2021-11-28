import React from "react";
import axios from 'axios';
import 'bootstrap/js/dist/modal'
import swal from "sweetalert"

class CreateCustomer extends React.Component {
//Refs para almacenar campos
idcustomer = React.createRef()
name = React.createRef()
email = React.createRef()
address = React.createRef()
phone = React.createRef()

//State, bien o mal?
state = {
    customer:[],
    status: null
}

//Añadir cliente a la base de datos
create_customer = (e) => {
  e.preventDefault()
  //Datos tomados desde el formulario 
  var customer = {
    idcustomer: this.idcustomer.current.value,
    name: this.name.current.value,
    email: this.email.current.value,
    address: this.address.current.value,
    phone: this.phone.current.value

  }

  console.log(customer)
  //Axios envía los datos a la API por POST
  axios.post('http://localhost:8080/api/customers/customer', customer)
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
            "Cliente añadido exitosamente",
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
                  <h5 className="modal-title" id="exampleModalLabel">Agregar cliente</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="create-customers" method="POST" className="needs-validation" onSubmit={this.create_customer} novalidate autocomplete="off">                                     
                  {/*Form fields*/}
                  <div className="modal-body">
                    {/*ID*/}
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control align-middle" name="idcustomer" ref={this.idcustomer} placeholder="70041053" required />
                      <label for="floatingId">Cédula de ciudadanía</label>
                      <div className="invalid-feedback">
                        Proporciona la cédula del cliente
                      </div>
                    </div>
                    {/*Name*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="name" ref={this.name} placeholder="John Doe" required />
                      <label for="floatingName">Nombre completo</label>
                      <div className="invalid-feedback">
                        Proporciona el nombre completo
                      </div>
                    </div>
                    {/*Email*/}
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" name="email" ref={this.email} placeholder="name@example.com" required />
                      <label for="floatingEmail">Correo electrónico</label>
                      <div className="invalid-feedback">
                        Proporciona un correo electrónico válido
                      </div>
                    </div>
                    {/*Address*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="address" ref={this.address} placeholder="JohnDoe" required />
                      <label for="floatingUser">Dirección</label>
                      <div className="invalid-feedback">
                        Proporciona una dirección válida
                      </div>
                    </div>
                    {/*Phone*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="phone" ref={this.phone} placeholder="3002485723" required />
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

export default CreateCustomer