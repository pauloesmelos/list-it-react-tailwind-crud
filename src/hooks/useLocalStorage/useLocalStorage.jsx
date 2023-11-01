import React from 'react';

const useLocalStorage = (id,pass) => {
  function get() {
    const credentials = JSON.parse(window.localStorage.getItem("credentials"));
    return credentials;
  }
  function set() {
    const credentials = {id, pass};
    window.localStorage.setItem("credentials", JSON.stringify(credentials));
  }
  function clear() {
    window.localStorage.removeItem("credentials");
  }
  return { get, set, clear }
}

export default useLocalStorage;