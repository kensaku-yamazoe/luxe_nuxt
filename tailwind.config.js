/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "600px",
      lg: "980px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "2400px",
    },
    extend: {
      fontSize: {
        "3xs": "10px",
        "2xs": "11px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "40px",
        "5xl": "50px",
        "6xl": "60px",
        "7xl": "70px",
        "8xl": "80px",
      },
      colors: {
        white00: "#FFFFFF",
        white01: "#f9f9f9",
        black_base: "#373737",
        black00: "#000000",
        tr_white10: "rgba(0, 0, 0, 0.1)",
        tr_white30: "rgba(0, 0, 0, 0.3)",
        tr_white50: "rgba(0, 0, 0, 0.5)",
        tr_black30: "rgba(0, 0, 0, 0.3)",
        tr_black50: "rgba(0, 0, 0, 0.5)",
        tr_black80: "rgba(0, 0, 0, 0.8)",
        gray00: "#151515",
        gray01: "#2a2a2a",
        gray02: "#555555",
        gray03: "#aaaaaa",
        pink01: "#ff1493",
        gold01: "#C1AB05",
        transparent_black00_50: "rgba(0, 0, 0, 0.5)",
      },
      width: {
        full: "100%",
        "20px": "20px",
        "30px": "30px",
        "50px": "50px",
        "80px": "80px",
        "200px": "200px",
      },
      maxWidth: {
        "600px": "600px",
      },
      height: {
        full: "100%",
        screen: "100vh",
        "1px": "1px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "300px": "300px",
        "80vh": "80vh",
      },
      maxHeight: {
        "600px": "600px",
      },
      margin: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "35px": "35px",
        "40px": "40px",
        "45px": "45px",
        "50px": "50px",
        "60px": "60px",
        "100px": "100px",
      },
      padding: {
        full: "100%",
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "35px": "35px",
        "40px": "40px",
        "45px": "45px",
        "50px": "50px",
        "60px": "60px",
        "100px": "100px",
      },
      inset: {
        auto: "auto",
        "1/2": "50%",
        0: "0",
      },
      translate: {
        "1/2": "50%",
        "-1/2": "-50%",
      },
      rotate: {
        "-45": "-45deg",
        45: "45deg",
      },
    },
  },
  plugins: [],
};

