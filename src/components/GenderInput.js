import React from 'react';

const GenderInput = () => {
    return (
        <div className = "container">
              <label>
      <input className="with-gap" name="group3" type="radio" />
      <span>Female</span>
    </label>
    
    <label>
      <input className="with-gap" name="group3" type="radio" />
      <span>Male</span>
    </label>
        </div>
    );
};

export default GenderInput;