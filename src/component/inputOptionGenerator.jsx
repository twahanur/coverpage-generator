import React from "react";

const SelectInput = ({ id, label, options, register }) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
    defaultValue="select"
      id={id}
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
      {...register(id, { required: true })}>
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
