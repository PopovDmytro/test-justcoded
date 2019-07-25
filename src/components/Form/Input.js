import React from 'react';

const Input = ({id, placeholder, type, name, value, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{placeholder}</label>
      <input className="form-control"
             type={type}
             id={id}
             name={name}
             placeholder={placeholder}
             value={value}
             onChange={onChange}/>
    </div>
  );
};

export default Input;