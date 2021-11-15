// Add visible class to back to top button when user scrolls past 100px

window.onscroll = function() {
    scrollToTop();
};

function scrollToTop() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("scroll-to-top").classList.add("visible-btn");
  } else {
    document.getElementById("scroll-to-top").classList.remove("visible-btn");
  }
}

/**
 * Add focus event listener to search input field
 * Hide search icon on focus
 * Add blur event listener to search field
 * Display search icon and set value of input to empty
 */

const searchInput = document.getElementById('search_query');
const searchIcon = document.getElementById('search-icon');

searchInput.addEventListener('focus', () => {
    searchIcon.style.display = 'none';
});

searchInput.addEventListener('blur', () => {
    searchIcon.style.display = 'block';
    searchInput.value = '';
});
  