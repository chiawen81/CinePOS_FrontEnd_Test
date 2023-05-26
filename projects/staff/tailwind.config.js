/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
    enabled: true, // 每次編譯都觀測(若沒寫預設false則只會在正式機時才會偵測)
    content: [ // 偵測哪幾種檔案類型，其餘的會捨去
      "projects/staff/src/**/*.{html,ts,scss}",
      "projects/share-libs/src/**/*.{html,ts,scss}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 漸層1色
        primary: {
          100: '#DABDFF',
          200: '#C39BFF',
          300: '#AD79FF',
          400: '#9756FF',
          500: '#9C6DFF',
          600: '#8346FF',
          700: '#6A1EFF',
          800: '#5900E6',
          900: '#4700BF',
        },
        // 漸層2色
        secondary: {
          100: '#B3F3FF',
          200: '#99E9FF',
          300: '#7FDFFF',
          400: '#66D5FF',
          500: '#71DDFF',
          600: '#4DC6E6',
          700: '#29AFCC',
          800: '#0087A3',
          900: '#00627A',
        },
        dark: {
          100: '#313131',
          200: '#222222',
          300: '#1A1A1A',
          400: '#151515',
        },
        light: {
          100: 'rgba(255, 255, 255, 1)',
          200: 'rgba(255, 255, 255, 0.8)',
          300: 'rgba(255, 255, 255, 0.6)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.2)',
          600: 'rgba(255, 255, 255 , 0.1)',
        },
        // 紅色
        warn: {
          100: '#DD6A76',
          200: '#F44545',
          300: '#442727',
          400: '#39282B'
        },
        // 藍色
        info:{
          100: '#A7E8FF',
          200: '#009EE2',
          300: '#273B44'
        },
        // 黃色+橘色
        warning: {
          100: '#FFDCA0',
          200: '#E9D375',
          300: '#E26C00'
        },
        // 綠色
        success: {
          100: '#74B147',
          200: '#363E31'
        },
        // 咖啡色
        coffee:{
          100: '#3E3928',
          200: '#473729'
        },
      }
    },
  },
  plugins: [],
}

