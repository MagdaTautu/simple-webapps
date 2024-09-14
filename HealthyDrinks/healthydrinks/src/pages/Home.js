import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../images/banne.png'
import "../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
function Home() {

    $(window).on("load", function(){
        let button = document.getElementById('toggleMenu');
        var ul = document.getElementById("menu");
        var app = document.getElementById("ap");

        button.addEventListener("click",function(){
            ul.classList.toggle("show");

            // app.style.height="0px";
        });
    });
  return (
    <section id="banner">
        <nav className='navbar'>
            <p>FreshFULL</p>
            <ul className='' id="menu">
                <a href='#home'><li>HOME</li></a>
                <a href='#about'><li>ABOUT</li></a>
                <a href='#store'><li>STORE</li></a>
                <a href="#contact"><li>CONTACT</li></a>
            </ul>
        <button className="show" id="toggleMenu"><FontAwesomeIcon icon={faBars} ></FontAwesomeIcon></button>
        </nav>
        <div className='banner'>
            <div className='left'>
                <p className='title'>
                    <span>Flavor</span> and <span>Taste</span> as well as feeling <span>save</span> and <span>refreshed</span> when you try our healthy drinks?
                </p>
                <p className='subtitle'>Enjoy our healthy juices from our hand planted fruits.</p>
                <div className='buttons'>
                    <button id="one">Order now</button>
                    <button id="two">Not sure yet?</button>
                </div>
            </div>
            <div className='right'>
            </div>
        </div>
    </section>
  )
}

export default Home;