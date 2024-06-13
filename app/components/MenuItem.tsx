import React from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Ensure this import statement is correct

// Define the type for the items prop
interface MenuItemProps {
  text: string;
  dropIcon?: boolean; // Optional prop
  items: Array<{ href: string; label: string }>;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, dropIcon, items }) => {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 p-2 text-lg font-medium text-gray-700 hover:text-gray-900">
        <span>{text}</span>
        {dropIcon && <FaChevronDown className="w-4 h-4" />}
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
