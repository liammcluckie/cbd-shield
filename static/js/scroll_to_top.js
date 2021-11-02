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