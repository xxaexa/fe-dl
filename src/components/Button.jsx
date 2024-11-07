const Button = ({ style, type, onClick, label }) => {
  return (
    <button
      className={`px-4 py-2 md:rounded-md rounded-t-md text-white bg-indigo-700  ${style}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
