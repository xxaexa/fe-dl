const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
}) => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
    </div>
  );
};

export default Input;
