import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            colors: {
            'whiteBlue': {
                1: '#f0f5f7',
                50: "#e1e9ed",
            },
            'lightBlue': '#98daf8',
            'darkBlue': '#01224f',
          },

          margin: {
            '50px': '50px',
            '100px': '100px',
            '150px': '150px',
            '200px': '200px',
            '500px': '500px',
            '750px': '750px',
            '100vw': '100vw',
            '50vw': '50vw',
            '40vw': '40vw',
            '49vw': '49vw',
            '10vw': '10vw',
            '20vw': '20vw',
            '25vw': '25vw',
          },

          padding: {
            '50px': '50px',
            '100px': '100px',
            '150px': '150px',
            '200px': '200px',
            '500px': '500px',
            '750px': '750px',
            '100vw': '100vw',
            '50vw': '50vw',
            '40vw': '40vw',
            '49vw': '49vw',
            '10vw': '10vw',
            '20vw': '20vw',
            '25vw': '25vw',
          },

          screens: {
            'xsm': '300px',
            // => @media (min-width: 300px) { ... }
          },

          maxWidth: {
            '1/2': '50%',
          }

        },
    },

    plugins: [forms],
};
