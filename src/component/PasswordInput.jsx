import React, { useState } from 'react';
import { Input } from '@material-tailwind/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PasswordInput = ({ 
  value, 
  onChange, 
  placeholder = "Enter password",
  label = "Password",
  required = false,
  className = "",
  id = "password",
  name = "password"
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        name={name}
        color="gray"
        size="lg"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={`!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200 pr-10 ${className}`}
        labelProps={{
          className: "hidden",
        }}
        value={value}
        onChange={onChange}
        required={required}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        onClick={togglePasswordVisibility}
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        ) : (
          <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
