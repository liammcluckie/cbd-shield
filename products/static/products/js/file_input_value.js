/**
 * Add event listener to file input element
 * On change retrieve the file name value
 * Display to the user
 */

const imageInput = document.getElementById('new-image');
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    document.getElementById('filename').innerHTML = `Image will be set to - ${file.name}`;
});