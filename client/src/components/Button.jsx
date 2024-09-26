import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-primary-color text-white w-fit h-10 flex items-center justify-center px-4 rounded-full"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
