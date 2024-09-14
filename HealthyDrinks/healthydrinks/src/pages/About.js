import React from 'react'
import "../styles/about.css";
import bar from "../images/bar.jpg";
import grape from "../images/grape.png";
import apricot from "../images/apricot.png";
import smoothis from "../images/smoothies.png";

import $ from 'jquery';
import CircleType from 'circletype';
function About() {
  $(document).ready(function(){
    var p = document.getElementById("f");
    const circleType = new CircleType(document.getElementById('f')).radius(290);
    var p1 = document.getElementById("fd");
    const circleType2 = new CircleType(document.getElementById('fd')).radius(270).dir(-1);
  });
  return (
    <section id="about">
      <div className='title'>
        <p className='title'>ABOUT</p>
      </div>
      <div className='about'>
        <div className='left'>
          <p id="f">Enjoy a set of yummy juicy flavors</p>
          <div id="img"></div>
          <p id="fd">visit us now</p>
        </div>
        <div className='right'>
          <div className='card'>
            <img src={grape}></img>
            <div className='card-content'>
              <p className='title'>Healthy drinks</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='card'>
            <img src={apricot}></img>
            <div className='card-content'>
              <p className='title'>Resto's first choice</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='card'>
            <img src={smoothis} id="sm"></img>
            <div className='card-content'>
              <p className='title'>Natural flavors</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className='adress'>
          <p>Adress 1 street 2 house 1 157cd</p>
          <p>city name</p>
          <p>country name</p>
      </div>
    </section>
  )
  
}

export default About