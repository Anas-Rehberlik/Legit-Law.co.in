/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: { 

      // New font style added 
      fontFamily : {

        'Montserrat': ['Montserrat', 'sans-serif']


      },
        
      // to add different images for different screen size for parrallex effect 
      backgroundImage: {
        'image1': "url('images/img12.jpg')",
        'image2': "url('images/img9.jpg')",
      }

      

    },
  },
  plugins: [],
}
