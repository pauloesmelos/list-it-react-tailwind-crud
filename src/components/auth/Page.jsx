import React from 'react';
import Head from '../html/header/Head';
import Form from './(component)/Form';

const Page = () => {

  return (
    <div 
      className="w-full h-screen bg-[url('/background.jpg')] bg-no-repeat bg-center bg-cove flex justify-center items-center"
    >
        <Head
          title="List It - Login" 
          contentKeywords="Login, List It, React"
          contentDescription="Página de login List It feito em React"
        />
        <Form />
    </div>
  )
}

export default Page;