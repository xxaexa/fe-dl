const Box = ({ children, style }) => {
  return (
    <div className={`p-4 my-8 bg-white shadow-xl rounded-md ${style}`}>
      {children}
    </div>
  );
};

export default Box;
