import React from "react";
import img from "../imagenes/main.png"
export default function Main(){
    return (
        <main id="main">
            <div className="contenedor">
                <section className="main-title">
                    <h1>Argentina Yoga Studio<br /> <strong>Equilibrio,Mente y Cuerpo</strong></h1>
                    <p>Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed.</p>
                    <a href="#">Comenzar</a>
                </section>
                <section className="main-img">
                    <img src={img} alt="main-img" />
                </section>
            </div>
        </main>
    )
}