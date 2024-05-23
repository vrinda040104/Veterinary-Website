import React from 'react';
import {icon_8 } from '../assets';
function Abt() {
    return (
        <div className="group-2">
        <div className="design-3 group">
          <div className="shape-3"></div>
          <div className="shape-4"></div>
        </div>
        <div className="image">
          <div className="shape-holder-2">
            <div className="video-icon">
              <img className="icon" src={icon_8} alt="" width="26" height="30"/>
            </div>
          </div>
        </div>
        <div className="text-2">
          <p className="title-2">As a veterinarian and<br/>lover of animals.</p>
          <p className="body-text-2">Lorem Ipsum available but themajoty suffered alteration in some form, by<br/>humour randomised words.</p>
          <a href=""><p className="subtitle-3">Our Service</p></a>
        </div>
      </div>
    );
}

export default Abt;