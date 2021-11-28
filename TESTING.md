[Return to ReadMe file](README.md)

## Testing Table of Contents

### 1. [Code Validation](#code-validation)

### 2. [User Story Testing](#user-story-testing)

- [First Time Visitor Goals Testing](#first-time-visitor-goals-testing)
    
- [Returning Visitor Goals Testing](#returning-visitor-goals-testing)

- [Frequent Visitor Goals Testing](#frequent-visitor-goals-testing)

### 3. [Browser Compatibility and Device Responsiveness Testing](#browser-compatibility-and-device-responsiveness-testing)

### 4. [Google Lighthouse Testing](#google-lighthouse-testing)

### 5. [Bugs](#bugs)

## Code Validation

Throughout this project all code has been regularly ran through HTML, CSS, Javascript and Python validators to ensure there are no errors within the code. See below screenshots of all validated and passed code. Due to the nature of this project and the use of Django templating code the HTML was passed into the validator from viewing page source in the browser.

Outlined for each page is the decision why the warnings present have not been corrected.

### [CSS Validation](readme-screenshots/testing/css-valid.png)

- The warnings present for this projects CSS were related to the use of CSS variables and added prefixes. Therefore warnings were ignored as these practices are deemed valid.

---

### [HTML Validation](readme-screenshots/testing/html-valid.png)

- All HTML for this project is free from errors after fixing through testing. The errors present before fixing were as follows.
    - Having input elements as direct descendants of a button element the fix for this is shown below and the commit to see the code difference is [here.](https://github.com/liammcluckie/cbd-shield/commit/b2cf33935f66ce71b4da62bd9d1d783c80eb8c0b?diff=split)

    ```
    <div class="navbar-toggler" role="navigation" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <!-- Hamburger Icon -->
            <input type="checkbox" id="check" class="checkbox" hidden />
    ```
    - Span elements being parents of form elements whilst being included within an anchor tag, the fix for this can be seen [here.](https://github.com/liammcluckie/cbd-shield/commit/042f4b84e556807da429498791243a5355136255?diff=unified)
    - Using django/forms/widgets/attrs.html dynamically adds an id to the element which already contained an id therefore causing an error. The full fix for this can be seen [here.](https://github.com/liammcluckie/cbd-shield/commit/eebfa558263d7d20596a06de319f0ba543ce1250)
    - An error was caused by a poor aria label attribute value, which was due to Django templating logic defining the value of this attribute the fix invloved removing the whitespace arounf the if statement output seen [here.](https://github.com/liammcluckie/cbd-shield/commit/9140a53ac5ca5b0792d2342be1723c954ec3d8fb)
    - `<h4>` elements being descendants of `<th>` elements is not allowed, fix [here.](https://github.com/liammcluckie/cbd-shield/commit/2c3ccb4645de6e04eb452bd08c27f745573b6281)
    - `<div>` elements being descendants of `<label>` elements, fix [here.](https://github.com/liammcluckie/cbd-shield/commit/c78264f5be77a4156f398c4021aec3f4145e30b6)
    
---

### Javascript Validation

- All javascript is free from errors with the only warning present relating to the undefined variable `Stripe` and the use of JQuery `$` syntax, both which have been ignored due to correct use.

    - [script.js](readme-screenshots/testing/scriptjs-valid.png)
    - [file_input_value.js](readme-screenshots/testing/filejs-valid.png)
    - [stripe_elements.js](readme-screenshots/testing/stripejs-valid.png)
    - [review_form_validation.js](readme-screenshots/testing/reviewjs-valid.png)
    - [update_cart_quantity_script.html](readme-screenshots/testing/cartjs-valid.png) 

---

### Python Validation

- All written Python code has been ran through an online PEP8 syntax checker called [Python Checker](https://www.pythonchecker.com/) and all syntax errors that are not code style based or necessary for this specific project have been amended.