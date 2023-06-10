

// For navbar 
document.addEventListener("DOMContentLoaded", function() {
    // your JavaScript code goes here
    const button = document.querySelector('[data-collapse-toggle]');
    const menu = document.querySelector('#mobile-menu-2');
    const navLinks = document.querySelectorAll('#mobile-menu-2 a');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
  
    button.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        button.setAttribute('aria-expanded', 'false');
        menu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  });
  // Code for navbar ends here


  

  







// For Who we are video so that video automatically start when user go to this video section 

  document.addEventListener("DOMContentLoaded", function() {
  const videoPlayer = document.getElementById('videoPlayer');
  let videoPlayed = false;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // The video will autoplay when 50% of it is visible on the screen
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !videoPlayed) {
        videoPlayer.play();
        videoPlayed = true;
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(videoPlayer);
});

  