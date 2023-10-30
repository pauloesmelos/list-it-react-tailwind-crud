/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparentModal: "rgba(0,0,0,.2)"
      }
    },
    keyframes: {
      showMenuMobile: {
        "from": { opacity: "0", transform: "translateX(-5rem)"},
        "to": { opacity: "1", transform: "translateX(0rem)"}
      },
      showModal: {
        "from": { opacity: "0", transform: "scale(0)"},
        "to": { opacity: "1", transform: "scale(1)"}
      },
      closeModal: {
        "from": { opacity: "1", transform: "scale(1)"},
        "to": { opacity: "0", transform: "scale(0)"}
      },
      hiddenMenuMobile: {
        "from": { opacity: "1", transform: "translate3d(0,0,0)"},
        "to": { opacity: "0", transform: "translate3d(-5rem,0,0)", visibility: "hidden"}
      },
      loading: {
        "from": { transform: "rotate(0deg)"},
        "to": { transform: "rotate(360deg)"}
      }
    },
    animation: {
      showMenuMobile: "showMenuMobile 1s forwards",
      loading: "loading 1s linear infinite",
      hiddenMenuMobile: "hiddenMenuMobile 2s forwards",
      showModal: "showModal .6s forwards",
      closeModal: "closeModal .6s forwards"
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}