import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <section className="first" id="sec">
        <h1>Basic</h1>
        <p className="dollars">$19.99</p>
        <p id="users">500 GB Storage</p>
        <p id="users">2 Users Allowed</p>
        <p id="users">Send up to 3 GB</p>
        <a href="#">LEARN MORE</a>
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
        <a href="#">LEARN MORE</a>
      </section>
      
    </div>
  )
}

export default Main;