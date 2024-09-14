import React from 'react';
import "../styles/testm.css";
import avatar from '../images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faBarcode} from '@fortawesome/free-solid-svg-icons';
function Testm() {
  return (
    <section id="testimonials">
        <h2>Testimonials</h2>
        <div className='content'>
            <p className='subtitle'>
                <span>our happy</span> customers
            </p>
            <div className='customers'>
                <div className='client'>
                    <div className='top'>
                        <img src={avatar}></img>
                        <div className='info'>
                            <p className='name'>Juan Hernandez</p>
                            <p className='profession'>Athlete</p>
                            <div className='stars'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <p className='review'>Amorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Cras vitae nibh nisl. 
                        Cras etitikis mauris eget lorem ultricies ferme ntum 
                        a inti diam. Morbi mollis pellen tesque offs aiug 
                        ueia nec rhoncus. Nam ute offs aug ueia nec rhoncus. </p>
                        
                    </div>
                </div>
                <div className='client'>
                    <div className='top'>
                        <img src={avatar}></img>
                        <div className='info'>
                            <p className='name'>Juan Hernandez</p>
                            <p className='profession'>Athlete</p>
                            <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <p className='review'>
                            Amorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Cras 
                        vitae nibh nisl. Cras etitikis 
                        mauris eget lorem ultricies ferme ntum 
                        a inti diam. Morbi mollis pellen tesque 
                        offs aiug ueia nec rhoncus. Nam ute offs 
                        aug ueia nec rhoncus. </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testm