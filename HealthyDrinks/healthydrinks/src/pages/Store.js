import React,{useState,useEffect} from 'react'
import '../styles/store.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faBarcode,faDollarSign,faPercent,faEquals} from '@fortawesome/free-solid-svg-icons';
import straw from '../images/straw.png';
import tomato from '../images/tomato.png';
import apricot from '../images/apricot2.png';
import grape from '../images/grape2.png';
import melon from '../images/melon.png';
import orange from '../images/orange.png';


function Store() {
   
   function rightClick(clickEvent){
    clickEvent.preventDefault();
   }
   const [x,setX] = useState(0);
   function triggerOnce(x){
        if(x==0)
        {
            console.log(x);
            setX(y=>y+1);
        }
        else return;
   }

   
   function totalStrawberries(){
    var price = document.getElementById("priceStraw").placeholder;
    price=price*1;
    var discount = document.getElementById("discountStraw").placeholder;
    discount*=1;
    var total;
    total = count*price;
    total = total-(discount*total)/100;
    var e=document.getElementById("totalStraw");
    if(total > 0)
    e.innerHTML=total;
    else {
      total = 0;
      e.innerHTML=total;
    }
   }
   function totalTomato(){
    var price = document.getElementById("priceTomato").placeholder;
    price=price*1;
    var discount = document.getElementById("discountTomato").placeholder;
    discount*=1;
    var total;
    total = count*price;
    total = total-(discount*total)/100;
    var e=document.getElementById("totalTomato");
    if(total > 0)
    e.innerHTML=total;
    else {
      total = 0;
      e.innerHTML=total;
    }
   }

   function total(e){
    var priceID=e.currentTarget.getAttribute('data-price');
    var discountID=e.currentTarget.getAttribute('data-discount');
    var totalID=e.currentTarget.getAttribute('data-total');
    var price = document.getElementById(priceID).placeholder;
    var discount = document.getElementById(discountID).placeholder;
    price=price*1;discount*=1;
    var total=0;
    total = count*price;
    total = total-(discount*total)/100;

    var e=document.getElementById(totalID);

    console.log(price);
    console.log(discount);

   }
   const [count,setCount] = useState(1);
   function increase(ev){
    if(ev.button == 0)
    {
      setCount(prevCount => prevCount + 1);

    }
    else if(ev.button == 2)
    setCount(prevCount => prevCount - 1);
    
   }
   function returnId(event) {
    var id=event.currentTarget.getAttribute('data-tag'); //strawberry

    // console.log("i clicked on " + id + " div");
};
   useEffect(() => {
    var p = document.getElementsByClassName("alert");
   
    for(var i=0;i<p.length;i++)
    {
      if(count<0)
      p[i].classList.add("show");
      else p[i].classList.remove("show");
      
    }
  });
  function showDiv(e){
    var id=e.currentTarget.getAttribute('data-toggle');
    var cards = document.getElementsByClassName("card");
    var divs = document.getElementsByClassName("product");
    for(var i=0;i<cards.length;i++)
    {
      cards[i].style.border="transparent";
    }
        for(var i=0; i<divs.length; i++){
            divs[i].classList.remove("show");
            
        }
        document.getElementById(id).classList.add("show");
        e.currentTarget.style.border="3px solid #e82d60";
  }

  return (
    <section id="store">
      <div className='title'>
        <p className='title'>STORE</p>
      </div>
      <div className='store'>
        <div className='left bottom'>
          <div id="strawberry" className='product show'>
            <div className='top'>
                <img src={straw}></img>
                <div className='content'> 
                    <p className='title'>Strawberry magic</p>
                    <p className='ingredients'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
               
            </div>
            <div className='bottom'>
                <div className='input'>
                    <div className='title'>
                        <p>Quantity</p>
                    </div>
                    <div className='number'>
                        <h2 id="nr">{count}</h2>
                        {/* <button  onMouseDown={(ev)=>increase(ev)} onContextMenu={rightClick}><FontAwesomeIcon icon={faPlus} /></button> */}
                        <button className='plus' data-total={"totalStraw"} data-price={"priceStraw"} data-discount={"discountStraw"} data-tag={"strawberry"} onClick={function(e){total(e);totalStrawberries()}}   onContextMenu={function(event){ totalStrawberries(); rightClick(event)}} onMouseDown={function(event){ triggerOnce(x); increase(event);}}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <p className='alert' >This is an invalid number</p>

                <div className='input'>
                    <div className='title'>
                        <p>Price</p>
                    </div>
                    <div className='number'>
                        <input id="priceStraw" type="number" placeholder='8' readOnly="readonly"></input>
                        <button onMouseDown={totalStrawberries}><FontAwesomeIcon icon={faDollarSign} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Discount</p>
                    </div>
                    <div className='number'>
                        <input id="discountStraw" type="number" placeholder='3' readOnly="readonly"></input>
                        <button><FontAwesomeIcon icon={faPercent} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Total</p>
                    </div>
                    <div className='number'>
                        <h2 id="totalStraw">1</h2>
                        <button><FontAwesomeIcon icon={faEquals} /></button>
                    </div>
                </div>
                <button className='purchase'>Purchase</button>
            </div>
          </div>
          <div id="tomato" className='product'>
            <div className='top'>
                <img src={tomato}></img>
                <div className='content'> 
                    <p className='title'>Tomato</p>
                    <p className='ingredients'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
               
            </div>
            <div className='bottom'>
                <div className='input'>
                    <div className='title'>
                        <p>Quantity</p>
                    </div>
                    <div className='number'>
                        <h2 id="nr">{count}</h2>
                        <button className='plus' data-total={"totalTomato"} data-price={"priceTomato"} data-discount={"discountTomato"} data-tag={"tomato"} onClick={function(e){total(e);totalTomato()}}  onContextMenu={function(event){ totalTomato(); rightClick(event)}} onMouseDown={function(event){ triggerOnce(x); increase(event);}}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <p className='alert'>This is an invalid number</p>

                <div className='input'>
                    <div className='title'>
                        <p>Price</p>
                    </div>
                    <div className='number'>
                        <input id="priceTomato" type="number" placeholder='9' readOnly="readonly"></input>
                        <button><FontAwesomeIcon icon={faDollarSign} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Discount</p>
                    </div>
                    <div className='number'>
                        <input id="discountTomato" type="number" placeholder='5' readOnly="readonly"></input>
                        <button><FontAwesomeIcon icon={faPercent} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Total</p>
                    </div>
                    <div className='number'>
                    <h2 id="totalTomato">1</h2>
                        <button><FontAwesomeIcon icon={faEquals} /></button>
                    </div>
                </div>
                <button className='purchase'>Purchase</button>
            </div>
          </div>
          
          <div id="apricot" className='product'>
            <div className='top'>
                <img src={apricot}></img>
                <div className='content'> 
                    <p className='title'>APRICOT</p>
                    <p className='ingredients'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
               
            </div>
            <div className='bottom'>
                <div className='input'>
                    <div className='title'>
                        <p>Quantity</p>
                    </div>
                    <div className='number'>
                        <h2 id="nr">{count}</h2>
                        <button className='plus' data-tag={"tomato"} onClick={function(e){returnId(e);totalTomato()}}  onContextMenu={function(event){ totalTomato(); rightClick(event)}} onMouseDown={function(event){ triggerOnce(x); increase(event);}}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <p className='alert'>This is an invalid number</p>

                <div className='input'>
                    <div className='title'>
                        <p>Price</p>
                    </div>
                    <div className='number'>
                        <input id="priceTomato" type="number" placeholder='10' readOnly="readonly"></input>
                        <button><FontAwesomeIcon icon={faDollarSign} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Discount</p>
                    </div>
                    <div className='number'>
                        <input id="discountTomato" type="number" placeholder='5' readOnly="readonly"></input>
                        <button><FontAwesomeIcon icon={faPercent} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Total</p>
                    </div>
                    <div className='number'>
                    <h2 id="totalTomato">1</h2>
                        <button><FontAwesomeIcon icon={faEquals} /></button>
                    </div>
                </div>
                <button className='purchase'>Purchase</button>
            </div>
          </div>
          <div id="grape" className='product'>
            <div className='top'>
                <img src={grape}></img>
                <div className='content'> 
                    <p className='title'>GRAPE</p>
                    <p className='ingredients'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
               
            </div>
            <div className='bottom'>
                <div className='input'>
                    <div className='title'>
                        <p>Quantity</p>
                    </div>
                    <div className='number'>
                        <h2 id="nr">{count}</h2>
                        <button className='plus' data-tag={"tomato"} onClick={function(e){returnId(e);totalTomato()}}  onContextMenu={function(event){ totalTomato(); rightClick(event)}} onMouseDown={function(event){ triggerOnce(x); increase(event);}}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <p className='alert'>This is an invalid number</p>

                <div className='input'>
                    <div className='title'>
                        <p>Price</p>
                    </div>
                    <div className='number'>
                        <input id="priceTomato" type="number" placeholder='10' readOnly="readonly"></input>
                        <button><FontAwesomeIcon icon={faDollarSign} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Discount</p>
                    </div>
                    <div className='number'>
                        <input id="discountTomato" type="number" placeholder='5' readOnly="readonly"></input>
                        <button><FontAwesomeIcon icon={faPercent} /></button>
                    </div>
                </div>
                <div className='input'>
                    <div className='title'>
                        <p>Total</p>
                    </div>
                    <div className='number'>
                    <h2 id="totalTomato">1</h2>
                        <button><FontAwesomeIcon icon={faEquals} /></button>
                    </div>
                </div>
                <button className='purchase'>Purchase</button>
            </div>
          </div>
          <div id="melon"></div>
          <div id="orange"></div>
        </div>
        <div className='right'>
          <div className='card show' data-toggle="strawberry" onClick={(e)=>showDiv(e)}>
            <img src={straw}></img>
            <div className='card-content'>
              <p className='title'>Strawberry magic</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text.</p>
              <p className='price'>8 $</p>
              <button>Order</button>
            </div>
          </div>
          <div className='card' data-toggle="tomato" onClick={(e)=>showDiv(e)}>
            <img src={tomato} id="t"></img>
            <div className='card-content'>
              <p className='title'>Tomatoes rainbow</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text.</p>
              <p className='price'>9$</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='card' data-toggle="apricot" onClick={(e)=>showDiv(e)}>
            <img src={apricot} id="ap"></img>
            <div className='card-content'>
              <p className='title'>Apricot flavour</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text.</p>
              <p className='price'>12$</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='card' data-toggle="grape" onClick={(e)=>showDiv(e)}>
            <img src={grape} id="gr"></img>
            <div className='card-content'>
              <p className='title'>Grape flavour</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text.</p>
              <p className='price'>11$</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='card' data-toggle="melon">
            <img src={melon} id="me"></img>
            <div className='card-content'>
              <p className='title'>Melon Belon</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text.</p>
              <p className='price'>10$</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='card' data-toggle="orange">
            <img src={orange} id="or"></img>
            <div className='card-content'>
              <p className='title'>Orange natural</p>
              <p className='description'>Lorem Ipsum has been the industry's standard dummy text.</p>
              <p className='price'>12$</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
 
}

export default Store