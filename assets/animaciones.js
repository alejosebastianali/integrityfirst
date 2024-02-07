
//Fade Izquierdo
window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('fadeInLeft');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('animate__animated', 'animate__fadeInLeft');
          } else {
            element.classList.remove('animate__animated', 'animate__fadeInLeft');
          }
  
        }
  });


  //Fade Derecho
  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('fadeInRight');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('animate__animated', 'animate__fadeInRight');
          } else {
            element.classList.remove('animate__animated', 'animate__fadeInRight');
          }
  
        }
  });

  //Fade Top
  window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('fadeInUp');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
          } else {
            element.classList.remove('animate__animated', 'animate__fadeInUp');
          }
  
        }
  });
