jQuery(document).ready(function($) {  
  // Owl Carousel                     
  var owl = $('.carousel-default');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout: 5000
  });

  // Owl Carousel - Content Blocks  
  var owl = $('.carousel-blocks');
  owl.owlCarousel({
    nav: true,
    dots: false,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      481: {
        items: 3
      },
      769: {
        items: 4
      }
    },
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout: 5000
  });
  
  // Sticky Nav Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20){  
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
  document.querySelectorAll('.text-container').forEach(function (container) {
    const textContent = container.querySelector('.text-content');
    const toggleButton = container.querySelector('.toggle-btn');
  
    // Check if text overflows
    if (textContent.scrollHeight > textContent.offsetHeight) {
      // Show the button if truncation is needed
      toggleButton.style.display = 'inline';
      
      // Add click event listener for toggling
      toggleButton.addEventListener('click', function () {
        const isExpanded = textContent.classList.toggle('expanded');
        this.textContent = isExpanded ? 'Read Less' : 'Read More';
      });
    } else {
      // Hide the button if no truncation is needed
      toggleButton.style.display = 'none';
    }
  });

  // Get all navigation links
  const navLinks = document.querySelectorAll('.navbar a');

  // Add click event to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior

    // Remove "active-item" class from all <li> elements
    navLinks.forEach(nav => nav.parentElement.classList.remove('active-item'));

    // Add "active-item" class to the parent <li> of the clicked link
    this.parentElement.classList.add('active-item');

      // Scroll to the target section
      const targetId = this.getAttribute('href').substring(1); // Get the ID without #
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

});