import React from "react";

const Option = ({ label, value, onChange, options }) => {
  return (
    <div className="w-full md:w-auto my-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 w-full"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Option;
