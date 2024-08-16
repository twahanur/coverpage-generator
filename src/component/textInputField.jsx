import React from 'react'

const TextInputField = (payload) => {

const { id, label, placeholder, register } = payload;
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        placeholder={placeholder}
        {...register(id, { required: true })}
      />
    </div>
  );
};

export default TextInputField