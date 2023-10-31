import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-52">
      <div className="sm:flex hidden p-8 bg-white text-neutral-800 bottom-0 relative w-full justify-center
    gap-5 text-sm flex-wrap shadow-lg shadow-black">
        <p className="font-medium">&copy; 2023 Nenhum direito autoral reservado. Projeto pessoal</p>
        <p className="font-serif">
          <span className="text-blue-300">Powered by: </span>
          <a href="https://www.linkedin.com/in/pauloeduardomelos/" className="text-blue-300" target="_blank">
            paulo eduardo
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;