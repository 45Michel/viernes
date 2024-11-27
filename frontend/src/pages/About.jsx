import React from "react";
import Sidenav from "../component/Nav";
import Footer from "../component/Footer";
import './pages.css';

export default function About() {
    return (
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