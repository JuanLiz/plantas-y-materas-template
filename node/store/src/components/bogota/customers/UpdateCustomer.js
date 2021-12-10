import React from "react";
import axios from 'axios';
import swal from "sweetalert"
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";

class UpdateCustomer extends React.Component {
  
//Refs para almacenar campos
_id = null
path = null
url = []
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

    //Para listar clientes
    componentWillMount(){ 
      this.path = window.location.pathname
      this.url = this.path.split('/')
      console.log(this.url)
      this._id = this.url[4]
      this.getCustomer(this._id)
      
    }

    getCustomer = (id) => {
      axios.get('http://localhost:8080/api/customers/customer/'+id)
      .then(res =>{
          console.log(res.data)
          this.setState(
              {customer:res.data}
          )
      })
    }


//Actualizar cliente a la base de datos
update_customer = (e) => {
  e.preventDefault()
  //Datos tomados desde el formulario 
  var customer = {
    _id: this._id,
    idcustomer: this.idcustomer.current.value,
    name: this.name.current.value,
    email: this.email.current.value,
    address: this.address.current.value,
    phone: this.phone.current.value,
    city: 'BOG'
  }


  console.log(customer)
  //Axios envía los datos a la API por POST
  axios.put('http://localhost:8080/api/customers/customer/'+this._id, customer)
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
            "Cliente actualizado exitosamente",
            "success"
          )
          return (
              //Volver a pagina anterior
              <Navigate to='/bogota/customers'/>
          )
        }
         
        return(
            /*Update Modal*/
            <form action="update-customers" method="POST" className=" container needs-validation" onSubmit={this.update_customer} novalidate autocomplete="off">                                     
                  
                  {/*Form fields*/}
                  <div className="modal-body">
                  <h2 className="py-5 ">Actualizar cliente</h2>
                    {/*ID*/}
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control align-middle" name="idcustomer" ref={this.idcustomer} defaultValue={this.state.customer.idcustomer} placeholder="70041053" required />
                      <label for="floatingId">Cédula de ciudadanía</label>
                      <div className="invalid-feedback">
                        Proporciona la cédula del cliente
                      </div>
                    </div>
                    {/*Name*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="name" ref={this.name} defaultValue={this.state.customer.name} placeholder="John Doe" required />
                      <label for="floatingName">Nombre completo</label>
                      <div className="invalid-feedback">
                        Proporciona el nombre completo
                      </div>
                    </div>
                    {/*Email*/}
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" name="email" ref={this.email} defaultValue={this.state.customer.email} placeholder="name@example.com" required />
                      <label for="floatingEmail">Correo electrónico</label>
                      <div className="invalid-feedback">
                        Proporciona un correo electrónico válido
                      </div>
                    </div>
                    {/*Address*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="address" ref={this.address} defaultValue={this.state.customer.address} placeholder="JohnDoe" required />
                      <label for="floatingUser">Dirección</label>
                      <div className="invalid-feedback">
                        Proporciona una dirección válida
                      </div>
                    </div>
                    {/*Phone*/}
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="phone" ref={this.phone} defaultValue={this.state.customer.phone} placeholder="3002485723" required />
                      <label for="floatingPhone">Número de teléfono</label>
                      <div className="invalid-feedback">
                        Proporciona una número de teléfono válido
                      </div>
                    </div>               
                  </div>{/*End Form fields*/}
                  {/*Submit buttons*/}
                  <div className="modal-footer">
                    <NavLink to="/bogota/customers" type="button" className=" mx-1 align-items-center btn btn-outline-secondary inactive" role="button">
                      <span className="d-block me-2">
                        <i className="uil uil-times fs-4"></i>
                      </span>
                      <span className="d-block align-middle fw-bold">
                        Cancelar
                      </span>
                    </NavLink>
                    <button type="submit" className="mx-1 align-items-center btn btn-outline-primary ">
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

export default UpdateCustomer