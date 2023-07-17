import React, { useState } from 'react';
import './ToggleButton.css';


const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
<<<<<<< HEAD
      <h1 id="pricing">Our Pricing</h1>
      <div className="spin">
      <span>Monthly</span> <label class="switch">
   <input type="checkbox" />
   <span class="slider round" onClick={() => setToggle(!toggle)}></span>
  </label> <span>Annually</span>
  </div>
      {/* <button onClick={() => setToggle(!toggle)} id="btn-main">{toggle ? "Annually" : "Monthly"}</button> */}
=======
      <button onClick={() => setToggle(!toggle)} id="btn">{toggle ? "Annually" : "Monthly"}</button>
>>>>>>> 90122ad39230a26de8f3d7c8f8cea5edf2b5c573
      {toggle ? 
       <div className="main">
       <section className="first" id="sec">
         <h1>Basic</h1>
         <p className="dollars">$199.99</p>
         <p id="users">1TB GB Storage</p>
         <p id="users">3 Users Allowed</p>
         <p id="users">Send up to 5 GB</p>
<<<<<<< HEAD
         <a href="#" id="learn">LEARN MORE</a>
=======
         <a href="#">LEARN MORE</a>
>>>>>>> 90122ad39230a26de8f3d7c8f8cea5edf2b5c573
       </section>
       <section className="second" id="sec">
         <h1>Professional</h1>
         <p className="dollars">$299.99</p>
         <p id="users">5 TB Storage</p>
         <p id="users">10 Users Allowed</p>
         <p id="users">Send up to 15 GB</p>
         <a className="learn" href="#">LEARN MORE</a>
       </section>
       <section className="third" id="sec">
         <h1>Master</h1>
         <p className="dollars">$399.99</p>
         <p id="users">10 TB Storage</p>
         <p id="users">15 Users Allowed</p>
         <p id="users">Send up to 25 GB</p>
<<<<<<< HEAD
         <a href="#" id="learn">LEARN MORE</a>
=======
         <a href="#">LEARN MORE</a>
>>>>>>> 90122ad39230a26de8f3d7c8f8cea5edf2b5c573
       </section>
       
     </div> : 
       <div className="main">
       <section className="first" id="sec">
         <h1>Basic</h1>
         <p className="dollars">$19.99</p>
         <p id="users">500 GB Storage</p>
         <p id="users">2 Users Allowed</p>
         <p id="users">Send up to 3 GB</p>
<<<<<<< HEAD
         <a href="#" id="learn">LEARN MORE</a>
=======
         <a href="#">LEARN MORE</a>
>>>>>>> 90122ad39230a26de8f3d7c8f8cea5edf2b5c573
       </section>
       <section className="second" id="sec">
         <h1>Professional</h1>
         <p className="dollars">$24.99</p>
         <p id="users">1 TB Storage</p>
         <p id="users">5 Users Allowed</p>
         <p id="users">Send up to 10 GB</p>
         <a className="learn" href="#">LEARN MORE</a>
       </section>
       <section className="third" id="sec">
         <h1>Master</h1>
         <p className="dollars">$39.99</p>
         <p id="users">2 TB Storage</p>
         <p id="users">10 Users Allowed</p>
         <p id="users">Send up to 20 GB</p>
<<<<<<< HEAD
         <a href="#" id="learn">LEARN MORE</a>
=======
         <a href="#">LEARN MORE</a>
>>>>>>> 90122ad39230a26de8f3d7c8f8cea5edf2b5c573
       </section>
       
     </div>
      }
    </div>
  );
};
export default ToggleButton;
<<<<<<< HEAD
=======

>>>>>>> 90122ad39230a26de8f3d7c8f8cea5edf2b5c573
