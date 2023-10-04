import PropTypes from 'prop-types';

const Button = ({ onClick, children, disabled }) => {
    
  
    return (
      <button onClick={onClick} disabled={disabled}>
         {children}
      </button>
    );
  };
  
  export { Button };

  Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
  }
