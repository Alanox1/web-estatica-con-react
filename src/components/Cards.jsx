import React from "react";
import card from "../imagenes/card.jpg"
import card2 from "../imagenes/card2.png"
import card3 from "../imagenes/card3.png"

export default function Cards(){
    return(
        <section id="cards">
             <p className="cards-title">PROFESORES EXPERTOS</p>
            <h4 className="cards-subtitle">Nuestro Equipo</h4>
            <div className="contenedor">

                <article className="card"> 
                    <img src={card} alt=""/>
                    <h5>Noelia Torres</h5>
                    <p>Health Coacher</p>
                    <p>Aliquam eleifend maxidmus libaero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo</p>
                    
                 <div className="card-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                 </div>
                </article>

                <article className="card"> 
                    <img src={card2} />
                    <h5>Jose Rodriguez</h5>
                    <p>Yoga Traine</p>
                    <p>Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo</p>
                    
                 <div className="card-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                 </div>
                </article>

                <article className="card"> 
                    <img src={card3} />
                    <h5>Sofia Fernandez</h5>
                    <p>Yoga Traine</p>
                    <p>Aliquam eleifend maximus libero bibendum hendrerit. Sed diam dui, dictum vel mauris id, tincidunt gravida leo</p> 
                 <div className="card-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                 </div>
                </article>
            </div>
            <div id="cards-button-container">
                <a className="cards-button" href="">VER TODO</a>
            </div>
        </section>
      
    )
}