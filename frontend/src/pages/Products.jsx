import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "../component/Nav";
import './pages.css';
import bar from "./img/bolso.png";
import bol from "./img/bolso 1.png";
import zap from "./img/zap M.png";
import cha from "./img/cha M.png";
import chaH from "./img/cha H.png";
import zapH from "./img/zap H.png";
import bolH from "./img/bolH.png";
import Footer from "../component/Footer";





export default function Products() {
    return (
        <>
            <div id="grid">
                <nav>
                    <Sidenav/>
                </nav>
                <main>
                    <div class="card text-bg-dark ">
                        <img src={bar} class="card-img img-fluid" alt="..."/>
                        <div class="card-img-overlay d-flex align-items-end justify-content-center">
                            <h5 class="card-title fs-1 fst-italic">D & M</h5>
                        </div>
                    </div>  

                    <div class="container text-center ">    
                        <div class="row mt-5">
                            <h3 class="mb-5 fst-italic">Articulos de Mujer</h3>
                            <div class="col">
                                <div class="card border border-0" >
                                    <img src={bol} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Bolso de mujer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border border-0" >
                                    <img src={zap} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Zapatos de Mujer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border border-0" >
                                    <img src={cha} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Chaqueta de Mujer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center ">    
                        <div class="row mt-5">
                            <h3 class="mb-5 fst-italic">Articulos de Hombre</h3>
                            <div class="col">
                                <div class="card border border-0" >
                                    <img src={bolH} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Bolso de mujer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border border-0" >
                                    <img src={zapH} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Zapatos de Hombre</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border border-0" >
                                    <img src={chaH} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Chaqueta de Hombre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer/>

                </footer>
            </div>
            
        </>
    )
}