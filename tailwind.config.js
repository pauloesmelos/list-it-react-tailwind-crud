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
        "from": { opacity: 0, transform: "translateX(-30rem)"},
        "to": { opacity: 1, transform: "translateX(0rem)"}
      },
      showModal: {
        "from": { opacity: "0", transform: "scale(0)"},
        "to": { opacity: "1", transform: "scale(1)"}
      },
      hiddenMenuMobile: {
        "from": { transform: "translateX(0)"},
        "to": { transform: "translateX(-50rem)", visibility: "hidden"}
      },
      loading: {
        "from": { transform: "rotate(0deg)"},
        "to": { transform: "rotate(360deg)"}
      },
      rotate: {
        "from": { transform: "rotate(0deg)"},
        "to": { transform: "rotate(180deg)"}
      }
    },
    animation: {
      showMenuMobile: "showMenuMobile .6s forwards",
      loading: "loading 1s linear infinite",
      hiddenMenuMobile: "hiddenMenuMobile 1s forwards",
      showModal: "showModal .6s forwards",
      rotate: "rotate .5s forwards"
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}