/**
 * Ensure reviews cannot be submitted blank
 * Get value of text area and trim whitespace
 * If the length of the review is 0 meaning no content has been added
 * Do not submit form and display error message to the user
 */

const reviewForm = document.getElementById('review-form');

reviewForm.onsubmit = function trimReviewWhitespace(event) {
    event.preventDefault();

    const reviewContent = document.getElementById('content');
    const reviewError = document.getElementById('review-error');
    const reviewContentLength = reviewContent.value.trim().length;

    if (reviewContentLength === 0) {
        reviewError.style.display = 'block';
    } else {
        reviewError.style.display = 'none';
        reviewForm.submit();
    }
};