import { useState } from 'react';
import './SwitchToggle.css';

const SwitchToggle = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className="container">
      <h1>Our Pricing</h1>
        <a className="plan" href="#">Annually</a> 
          <label className="switch">
            <input type="checkbox" checked />
              <span className="slider"/>
          </label>
        <a className="plan" href="#">Monthly</a>
    </div>
  )
}

export default SwitchToggle;