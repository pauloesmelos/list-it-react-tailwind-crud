import React from 'react';

const Footer = () => {
  return (
    <footer className="sm:flex hidden p-8 bg-white text-neutral-800 mt-32 justify-center
    gap-5 text-sm flex-wrap shadow-lg shadow-black">
      <p className="font-medium">&copy; 2023 Nenhum direito autoral reservado.</p>
      <p className="font-serif">
        <span className="text-blue-300">Powered by: </span>
        <a href="https://www.linkedin.com/in/pauloeduardomelos/" className="text-neutral-700
        hover:border-b-2 hover:border-neutral-700" target="_blank">
          pauloesmelos
        </a>
    </p>
    </footer>
  )
}

export default Footer;