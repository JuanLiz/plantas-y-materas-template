import React from "react";
import { Outlet, NavLink  } from "react-router-dom";
import "bootstrap/js/dist/dropdown"
import "bootstrap/js/dist/collapse"

import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { Profile } from "./Profile";

class Sidebar extends React.Component {

    location = null
    path = null
    url = []

    //Obtener ubicación de ruta
    componentWillMount(){ 
      this.path = window.location.pathname
      this.url = this.path.split('/')
      console.log(this.url)
      this.location = this.url[2]
    }

    render(){
        
        return(
            <div className="d-flex">
                {/*Sidebar. Add style="width: 280px;"*/}
                <div className="sidebar p-3 bg-light fw-bold" >
                <ul className="nav mb-auto">
                    <a href="/" className=" px-3 py-2 me-auto text-decoration-none">
                    <Logo className='w-100'/>
                    </a >

                    <hr/>
                    {/*<li className="nav-item">
                    <NavLink to="home" className="nav-link">
                        <i className="me-2 uil uil-estate"></i> 
                        <span>Inicio</span> 
                    </NavLink>
                    </li>*/}
                    <li>
                    <NavLink to="products" className="nav-link">
                        <i className="me-2 uil uil-box"></i>
                        <span>Productos</span>
                    </NavLink>
                    </li>
                    {/*<li>
                    <a href="providers" className="nav-link">
                        <i className="me-2 uil uil-truck"></i>
                        <span>Proveedores</span>
                    </a>
                    </li>*/}
                    <li>
                    <NavLink to="customers" className="nav-link">
                        <i className="me-2 uil uil-user-square"></i>
                        <span>Clientes</span> 
                    </NavLink>
                    </li>       
                    <li>
                    <NavLink to="sales" className="nav-link">
                        <i className="me-2 uil uil-shop"></i>
                        <span>Ventas</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="reports" className="nav-link">
                        <i className="me-2 uil uil-chart"></i>
                        <span>Reportes</span>
                    </NavLink>
                    </li>
                </ul>
                </div>{/*End Sidebar*/}

                <div className="w-100">
                {/*Navbar*/}
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light fw-bold p-3">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        {/*Logo for small devices*/}
                        <a href="/" className="little p-1 me-auto ms-2 text-decoration-none">
                        <img src="assets/img/logo.svg" width="120" alt=""/>
                        </a>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        {/*Menu for small devices*/}
                        <ul className="little d-block nav mb-auto">
                    <a href="/" className=" px-3 py-2 me-auto text-decoration-none">
                    <Logo className='w-100'/>
                    </a >

                    <hr/>
                    <li className="nav-item">
                    <NavLink to="home" className="nav-link">
                        <i className="me-2 uil uil-estate"></i> 
                        <span>Inicio</span> 
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="products" className="nav-link">
                        <i className="me-2 uil uil-box"></i>
                        <span>Productos</span>
                    </NavLink>
                    </li>
                    {/*<li>
                    <a href="providers" className="nav-link">
                        <i className="me-2 uil uil-truck"></i>
                        <span>Proveedores</span>
                    </a>
                    </li>*/}
                    <li>
                    <NavLink to="customers" className="nav-link">
                        <i className="me-2 uil uil-user-square"></i>
                        <span>Clientes</span> 
                    </NavLink>
                    </li>       
                    <li>
                    <NavLink to="sales" className="nav-link">
                        <i className="me-2 uil uil-shop"></i>
                        <span>Ventas</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="reports" className="nav-link">
                        <i className="me-2 uil uil-chart"></i>
                        <span>Reportes</span>
                    </NavLink>
                    </li>
                </ul>
                <div>
                    <button type="button" className="btn btn-outline-dark dropdown-toggle align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="d-flex me-1">
                        <i className="uil uil-map-marker-alt fs-3 lead"></i>
                      </span>
                      <span className="d-flex fw-bold ">
                        Medellín
                      </span>
                    </button>
                    
                    <ul className="dropdown-menu">
                        <li><span className="dropdown-item-text">Selecciona la ciudad</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><NavLink to={"/bogota/"+this.location} className="dropdown-item">Bogotá</NavLink></li>
                        <li><NavLink to={"/medellin/"+this.location} className="dropdown-item">Medellín</NavLink></li>
                        <li><NavLink to={"/cali/"+this.location} className="dropdown-item">Cali</NavLink></li>
                    </ul>
                </div>
            </div>
            <Profile />
        </div>
        </nav>{/*End Navbar*/}
         {/*Para traer la pagina anidada, el inicio, los productos, etc */}
         <Outlet />
         </div>   
        </div>
 

        )
    }
}

export default Sidebar