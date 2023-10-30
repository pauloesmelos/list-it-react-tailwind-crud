import React from 'react';

const Footer = () => {
  return (
    <footer className="sm:flex hidden p-8 bg-gray-200 text-neutral-800 mt-16 justify-around text-sm flex-wrap shadow-lg shadow-black">
      <p>&copy; 2023 Nenhum direito autoral reservado.</p>
      <p>
        <span className="font-serif">Powered by: </span>
        <a href="#" className="text-blue-800">pauloesmelos</a>
    </p>
    </footer>
  )
}

export default Footer;