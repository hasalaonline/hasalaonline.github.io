document.addEventListener("DOMContentLoaded", main());

function screenWidth(screenWidth) {
    return window.innerWidth >= screenWidth;
}
function main(){
    var screenWidth = window.innerWidth;
    if (screenWidth >= 3000) {
        zooming(2.5);

    } else if (screenWidth >= 1200){
        zooming(1.5);
    } else if(screenWidth >=600) {
        zooming(10);
    }
}
function zooming(loadingScale) {
    window.addEventListener('load', function() {
        var image = document.querySelector('.zoom-image');
        var bodyn = document.querySelector('body');
        var scale = loadingScale;
        var duration = 0;
        var delay = 0;
        
        image.style.transition = 'transform ' + duration + 'ms ease-out ' + delay + 'ms';
        image.style.transform = 'scale(' + scale + ')';
        image.style.display = 'block';
        bodyn.style.display = 'block';

    });
    
    window.addEventListener('scroll', function() {
        var hero_container = document.querySelector('.hero-container')
        var image = document.querySelector('.zoom-image');
        var duration = 1500;
        var delay = 0;

        var hero_scale = 0.5
        image.style.transform = 'scale(' + 1.5 + ')';

    hero_container.style.transition = 'transform ' + duration + 'ms ease-out ' + delay + 'ms';
    hero_container.style.transform = 'scale(' + hero_scale + ')';
    });
}

//   testimonials
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active');
        }
    });
}

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function showPrevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

nextButton.addEventListener('click', showNextTestimonial);
prevButton.addEventListener('click', showPrevTestimonial);

function autoplay() {
    showNextTestimonial();
}

let interval = setInterval(autoplay, 5000);

nextButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(autoplay, 5000);
});

prevButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(autoplay, 5000);
});

showTestimonial(currentIndex);


// Select all sections with the 'lazy' class
const sections = document.querySelectorAll('section');

// Configure the observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // Percentage of the section visible in the viewport
};

// Callback function when an observed section enters the viewport
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('lazy-load'); // Add the lazy-load class
      observer.unobserve(entry.target); // Stop observing once loaded
    }
  });
}, observerOptions);

// Start observing each section
sections.forEach(section => {
  sectionObserver.observe(section);
});
