'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter function for select items
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// filter function for Projects page
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-item]');
  
  // Function to filter items based on selected category
  function filterItemsByCategory(category) {
    filterItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      
      // Show or hide items based on category match
      if (category === 'All' || itemCategory === category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Event listener for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove 'active' class from all buttons and add it to the clicked button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Get the category from the button text
      const category = this.innerText.trim();
      
      // Call the function to filter items
      filterItemsByCategory(category);
    });
  });
});


// Contact form variables
// Get form and popup elements
const form = document.querySelector('.form');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Show the pop-up when form is submitted
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from actually submitting

  // Simulate sending message (you can implement AJAX or real form submission here)
  setTimeout(() => {
    // Show the popup after message is "sent"
    popup.style.display = 'flex';
  }, 500); // Delay to simulate sending

  // Reset form after submission
  form.reset();
});

// Close the pop-up when "Close" button is clicked
closePopup.addEventListener('click', function () {
  popup.style.display = 'none';
});
