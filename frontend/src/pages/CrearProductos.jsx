import React from "react";
import Sidenav from "../component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import './pages.css';
import Footer from "../component/Footer";

export default function CrearProductos() {
    return (
        <>
            <div className="grid">
                <nav>
                <Sidenav/>
                </nav>
                <main>
                    <div class="container text-center">
                        <div class="row mt-5">
                            <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Nombre</span>
                            <input type="text" class="form-control" placeholder="Nombre del producto" aria-label="Nombre"/>
                            </div>

                            <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon2">Codigo</span>
                            <input type="text" class="form-control" placeholder="Codigo" aria-label="Codigo"/>
                            </div>

                            <div class="mb-3">
                            <label for="basic-url" class="form-label">Productos</label>
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon3">Inventario</span>
                                <input type="text" class="form-control" placeholder="Inventario" aria-label="Inventario"/>
                            </div>
                            </div>

                            <div class="input-group mb-3">
                            <span class="input-group-text">Marca</span>
                            <input type="text" class="form-control" placeholder="Marca" aria-label="Marca"/>
                            </div>

                            <div class="input-group mb-3">
                            <span class="input-group-text">Valor</span>
                            <input type="text" class="form-control" placeholder="Valor" aria-label="Valor"/>
                            </div>
                        </div>
                        <button type="button" class="btn btn-dark">Crear producto</button>
                    </div>  
                </main>
                <footer className="mt-5">
                    <Footer/>
                </footer>
            </div>
        </>
    )
}