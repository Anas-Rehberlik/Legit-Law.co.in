/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  // content: ['./**/*.html', './**/*.js',],



  theme: {
    extend: { 

      // New font style added 
      fontFamily : {

        'Montserrat': ['Montserrat', 'sans-serif']


      },
        
      // to add different images for different screen size for parrallex effect 
      backgroundImage: {
        'image1': "url('/assets/images/bg-image-1.jpg')",
        'image2': "url('/assets/images/bg-image-2.jpg')",
      }

      

    },
  },
  plugins: [],
}
