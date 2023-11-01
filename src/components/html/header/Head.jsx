import React from 'react';

const Head = ( { title, contentKeywords, contentDescription } ) => {
  React.useEffect(() => {
    document.title = title;
    document.querySelector("meta[name=keywords]").setAttribute("content", contentKeywords);
    document.querySelector("meta[name=description]").setAttribute("content", contentDescription);
  }, []);
  return 
      <>
      </>
}

export default Head;