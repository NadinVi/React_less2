import PropTypes from 'prop-types';

const Input = ({ value, label, onChange }) => { 


  const inputChange = (e) => onChange(e.target.value)
  
    return (
      <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={inputChange}/>
      </div>
    );
  };
  
  export { Input };

  Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    onChange: PropTypes.func,
  }
