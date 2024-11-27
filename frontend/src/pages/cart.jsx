import React from "react";
import Sidenav from "../component/Nav";
import './pages.css';
import Footer from "../component/Footer";

export default function Cart(){
    return(
        <div id="grid">
            <nav>
                <Sidenav/>
            </nav>
            <footer className="mt-5">
                <Footer/>
            </footer>
            
        </div>
    )
}