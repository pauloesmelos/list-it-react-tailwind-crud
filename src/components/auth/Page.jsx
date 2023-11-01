import React from 'react';
import Head from '../html/header/Head';
import Form from './(component)/Form';
import NavBar from '../html/nav-bar/NavBar';
import MobileMenu from '../html/menu/MobileMenu';
import useLocalStorage from '../../hooks/useLocalStorage/useLocalStorage';

const Page = () => {
  return (
    <div>
      <NavBar type="login" />
      <MobileMenu type="login" />
        <div 
          className="w-full h-screen bg-[url('/background.jpg')] bg-no-repeat bg-center bg-cove flex justify-center items-center"
        >
          <Head
            title="List it - Login" 
            contentKeywords="Login, List It, React"
            contentDescription="Página de login List It feito em React"
          />
          <Form />
      </div>
    </div>
  )
}

export default Page;