import React from "react";
import {useAuth0} from "@auth0/auth0-react"

import logo from '../assets/img/logo-l.png'
import headerimg from '../assets/img/undraw_moving.svg'

import "bootstrap/js/dist/carousel"

export const Login = () => {
    const {loginWithRedirect} = useAuth0()
    return (
        <div>
    
        {/*Background*/}
        <div className="background container-fluid">
            <div className="bg-img"></div>
        </div>
        
        {/*Main content*/}
        <div className="nomargin row align-items-center justify-content-center vh-100" >
                <div className="col-5 login vh-75">
                    <div className=" ">
                        <div className="col-12 pt-5 pb-4 text-center">
                            <img className="px-5" src={logo} alt="" />
                        </div>             
                        {/*Left login section*/}
                        <div className=" col-sm-12 vh-5 px-4 ">
                            <div className="container justify-content-center pb-5">       
                                {/*Login card*/}
                                <div className="noborder card">
                                    <div className="card-body h-100" > 
                                        <h1 className="card-title pcolor pb-5 text-center">Iniciar sesión</h1>
                                        <button type="submit" className="loginbutton pcolorb btn-l btn btn-primary w-100 ms-auto align-items-center "
                                            onClick= {
                                                () => loginWithRedirect()
                                            }>
                                            <i class="uil uil-padlock lead me-2"></i>
                                            <strong className='fs-5' >Ingresa con Auth0</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className= 'text-center'>
                            <img className='img-fluid px-5 ' src={headerimg} />
                            <div className="p-5">
                                <h6 className="text-center">
                                    Ingresa para acceder a la administración de usuarios, proveedores y productos
                                </h6>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>

        </div>
    </div>
    )
}



