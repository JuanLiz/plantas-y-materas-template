import React from "react";

import headerimg from '../assets/img/undraw_moving.svg'
import i_users from '../assets/img/i-users.svg'
import i_boxes from '../assets/img/i-boxes.svg'
import i_plant from '../assets/img/i-plant.svg'

class Home extends React.Component {
    render(){
        
        return(
            /*Main content*/
            <div className="content p-4">
                <section className="mainc">
                    
                    {/*Welcome*/}
                    <div className="row pb-5 align-items-center">
                        <div className="col-md-8 align-items-center align-middle">
                        <h1 className="mb-0">Bienvenido, Admin!</h1>
                        </div>
                        <div className="col-md-4 g-0 my-auto">
                        {/*Illustration*/}
                        <div className=" d-flex me-2 justify-content-end">
                            <img className="big" src={headerimg} alt="" width="300"/>
                        </div>
                        </div>
                    </div>

                    {/*Cards*/}
                    <div className="row pb-3">
                        {/*Users*/}
                        <div className="col-md-4 pb-3">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                            <div className="row align-items-center g-0">
                                <div className="col me-1">
                                <h6 className="fw-normal card-title pcolor">Usuarios</h6>
                                <h2>37</h2>
                                </div>
                                <div className="col-auto">
                                <img src={i_users} alt="" width="70"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*Providers*/}
                        <div className="col-md-4 pb-3">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                            <div className="row align-items-center g-0">
                                <div className="col me-1">
                                <h6 className="fw-normal card-title pcolor">Proveedores</h6>
                                <h2>11</h2>
                                </div>
                                <div className="col-auto">
                                <img src={i_boxes} alt="" width="70"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*Products*/}
                        <div className="col-md-4 pb-3">
                        <div className="card h-100 shadow">
                            <div className="card-body">
                            <div className="row align-items-center g-0">
                                <div className="col me-1">
                                <h6 className="fw-normal card-title pcolor">Productos</h6>
                                <h2>250</h2>
                                </div>
                                <div className="col-auto">
                                <img src={i_plant} alt="" width="70"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>              
                    </div>         
                    
                    {/*Chart and Items*/}
                    <div className="row pb-5">
                        {/*Chart*/}
                        <div className="col-md-7">
                        <div className="card p-2 h-100 shadow">
                            <div className="card-body">
                            <h5 className="card-title pcolor fw-normal">Ventas de la última semana</h5>
                            <div className="chart-area">
                                <canvas id="myAreaChart"></canvas>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*Last items added*/}
                        <div className="col-md-5">
                        <div className="p-2 card h-100 shadow">
                            <div className="card-body">
                            <h5 className="card-title pcolor fw-normal">Últimos productos agregados</h5>
                            <div className="py-3">
                                <table className="lastproducts table table-responsive table-striped">
                                <tbody>
                                    <tr className="align-middle">
                                    {/*All th here must have*/}
                                    <th scope="row"><i className="me-1 uil uil-tag-alt"></i></th>
                                    <td className="fw-bold">Tierra abonada 4kg</td>
                                    <td className="pcolor">$15400</td>
                                    </tr>
                                    <tr className="align-middle">
                                    <th scope="row"><i className="me-1 uil uil-tag-alt"></i></th>
                                    <td className="fw-bold">Suculenta Árbol de Jade</td>
                                    <td className="pcolor">$48000</td>
                                    </tr>
                                    <tr className="align-middle">
                                    <th scope="row"><i className="me-1 uil uil-tag-alt"></i></th>
                                    <td className="fw-bold">Cactus decorativo 8cm</td>
                                    <td className="pcolor">$26000</td>
                                    </tr>
                                    <tr className="align-middle">
                                    <th scope="row"><i className="me-1 uil uil-tag-alt"></i></th>
                                    <td className="fw-bold">Matera con soporte metálico</td>
                                    <td className="pcolor">$5000</td>
                                    </tr>   
                                    <tr className="align-middle">
                                    <th scope="row"><i className="me-1 uil uil-tag-alt"></i></th>
                                    <td className="fw-bold">Combo cónica con Palo de Brasil 60cm</td>
                                    <td className="pcolor">$128000</td>
                                    </tr>                         
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </section>
            </div>/*End Main content*/
        )
    }
}

export default Home