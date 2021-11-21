/**
 * Set scrolling variable to false
 * Add document scroll event listener
 * Set scrolling variable to true in order to call setInterval to reduce throttling
 * Add visible class to back to top button when user scrolls past 100px
 */

let scrolling = false;

document.body.addEventListener('scroll', () => {
  scrolling = true;
  setInterval(() => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrolling = false;
      document.getElementById("scroll-to-top").classList.add("visible-btn");
    } else {
      document.getElementById("scroll-to-top").classList.remove("visible-btn");
    }
  },300);
});

/**
 * Add click event listener to scroll to top anchor
 * Scroll window to top animated smoothly
 */

document.getElementById('scroll-to-top').addEventListener('click', () => {
    // For Safari
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    // For all other browsers
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
});

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
  