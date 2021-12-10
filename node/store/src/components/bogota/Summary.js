import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import "bootstrap/js/dist/collapse"

import 'bootstrap/js/dist/modal'
import 'jquery/dist/jquery.min.js';
import "datatables.net-bs5/js/dataTables.bootstrap5"
import "datatables.net-bs5/css/dataTables.bootstrap5.css"
import $ from 'jquery'; 

import headerimg from '../../assets/img/undraw_segment_analysis.svg'

class Reports extends React.Component {
    componentDidMount() {
        //initialize datatable
        $(document).ready(function () {
            $('#dataTable').DataTable();
        });
    }

    longcities = ['Bogotá','Cali','Medellín']

    
    state = {
        sales: [],
        salespercity: [],
    }

    //Para listar cliente
    componentWillMount(){ 
      this.getSales()
    }

    getSales = () => {
      axios.get('http://localhost:8080/api/sales/')
      .then(res =>{
        const sales = res.data
        console.log(sales)
          this.setState({sales:sales})
          this.salespercity()
      })
    }

    salespercity = () => {
      //Las ciudades
      var cities = ['BOG','CAL','MED']
      //Traer ventas
      var sales = this.state.sales
      //Recorrer arreglo de ciudades y agrupar ventas por cada una
      var salespercity = cities.map(city=> ({
        //Se ubican las ciudades
        city:city,
        //Se filtra el total de ventas por ciudad
        totalsales:sales.filter(sale => sale.city.includes(city))
      }))
      //Se remapea el arreglo que se lleva. Se ubica la ciudad, pero se extrae
      //el total de cada venta para posteriormente sumarlo
      .map(sale => ({
        city:sale.city,
        totalsales:sale.totalsales.map(sale => (sale.total)).map(total => (total))
        //Se hace la suma de los totales y se almacena
        .reduce((sum, total) => sum+total, 0)
      }))
      console.log(salespercity)
      this.setState({salespercity:salespercity})
    }

    render(){
      
        return(
            /*Main content*/
            <div className="content p-4">
              
              <section className="mainc">
                  
                  {/*Welcome*/}
                  <div className="row pb-5 align-items-center">
                    <div className="col-md-8 align-items-center align-middle">
                      <h1 className="mb-0">Panel de consolidado</h1>
                    </div>
                    <div className="col-md-4 g-0 my-auto">
                      {/*Illustration*/}
                      <div className=" d-flex me-2 justify-content-end">
                        <img className="big" src={headerimg} alt="" width="200" />
                      </div>
                    </div>
                  </div>
                        {/*Users table*/}            
                        <div className="p-2 mx-auto">
                          <h2 className="py-5 text-center">Total de ventas por ciudad</h2>
                          <table className=" table table-responsive text-center cells">
                            <thead>
                                <tr>
                                    <th>Ciudad</th>
                                    <th>Total en ventas</th>
                                </tr>
                            </thead>
                            {/*Traer clientes del API*/}
                          <tbody>
                            <tr>
                              <td>Bogotá</td>
                              <td>Cali</td>
                              <td>Medellín</td>                              
                            </tr>
                            <tr>
                          {
                                  this.state.salespercity.map((sale)=>{
                                      return(
                                        <td>{'$'+sale.totalsales}</td>
                                      )
                                  })
                          }
                          </tr>
                          </tbody>
                          </table>{/*End Users table*/}
                          {/*Para traer el modal de moidificar usuario */}
                        </div>
              </section>
            </div>/*End Main content*/
        )
    }
}

export default Reports