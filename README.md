# CBD Shield

[View Live Project Here](https://cbd-shield.herokuapp.com/)

![Screenshot of website on multiple devices](readme-screenshots/testing/responsive-screenshot.png)

## Overview

CBD shield are a modern health brand producing healing products using natural ingredients with the environment being at the core of the brand values. The audience focus is aimed at users who value their health and the environment, CBD Shield aim to educate users through content and imagery as well as sell their products. This is a complete and functioning e-commerce website that allows users to purchase products and register an account both with full CRUD management. This project will have a strong focus on using templating frameworks, database management, security and dynamic content.

## Table of Contents

## Table of Contents

### 1. [UX](#ux) 
    
#### 1a. [User Stories](#user-stories)

#### 1b. [User Centered Design](#user-centered-design)
- Strategy 
- Scope 
- Structure 
- Wireframes

### 2. [Design](#design)
- Colour Scheme
- Typography
- Imagery

### 3. [Database Model](#database-model)

### 4. [Features](#features)

### 5. [Technologies Used](#technologies-used)
- Syntax
- Frameworks, Libraries & Programs

### 6. [Testing](#testing)
- [Testing Document](TESTING.md)

### 7. [Deployment](#deployment)
- [Deployment Document](DEPLOYMENT.md)

#### 7a. Version Control

#### 7b. Heroku 

#### 7c. GitHub
- Forking the Repository 
- Cloning the Repository

### 8. [Credits](#credits)
- Resources
- Code 
- Media

## UX

### User Stories

- **User Goals**

    a. As a user, I want to be able to access the site from any device.

    b. As a user, I want to know that my personal information is safe and stored securely on a database.

    c. As a user, I want to enjoy using the website through great aesthetics and a strong UX/UI.

    d. As a user, I want to be able to find using the websites functionality simple with clear instructions.

    e. As a user, I want to have full control of my account following computer programming CRUD (create, read, update & delete) operations.

    f. As a user, I want to know that I am able to complete payments securely and my details are safe.

- **First Time Visitor Goals**

    a. As a first time visitor, I want to immediately and clearly understand the purpose of the website and the business.

    b. As a first time visitor, I want to find the UI eye catching, clear and professional looking. Increasing my trust in this website.

    c. As a first time visitor, I want to be able to easily navigate around the site at various stages of a page through the use of call to actions.

    d. As a first time visitor, I want to find out more information about the products and how they work.

- **Returning Visitor Goals**

    a. As a returning visitor, I want to find reviews and testimonials of the brand and products.

    b. As a returning visitor, I want to find out detailed information about specific products.

    c. As a returning visitor, I want to be about to contact the site owner if I have any issues or questions.

    d. As a returning visitor, I want to be able to sign up to a newsletter for offers and information.

- **Frequent Visitor Goals**

    a. As a frequent visitor, I want to find purchasing products a smooth and simple process.

    b. As a frequent visitor, I want to be able to create a profile and save my details for future purchases.

    c. As a frequent visitor, I want to see all my previous and current order history.

    d. As a frequent visitor, I want to see new products and offers listed on the home page.

    e. As a frequent visitor, I want to receive email confirmations with order details upon purchasing products.

---

### User Centered Design

#### Strategy

- The main goal of this website is to convert visitors into customers and frequent users with accounts. Due to products produced by CBD Shield there will be a lot of detailed information on how the products benefit users, why using CBD is so beneficial, who should use these types of products and the different types of CBD products and their benefits. This content will be displayed using high quality, professional imagery, icons and copy. 

- To achieve the sites goals the most important information will be displayed on the landing page whilst being careful to not overload the user. The features and UI will play a huge role in displaying this information to the user in the best way possible making use of icons to portray categories, imagery of products in use and eye catching call to actions that direct users to more in depth information.

- One of the most important pages on the site that will be used to convoy necessary information to users will be through the sites FAQ page that will include detailed questions that cover all aspects of CBD. This page will include interactive functionality whilst keeping with the sites clean and modern UI.

- The ideal steps that a new user would take are the following;

    - Explore the websites landing page, reading the informative information about the business and products.

    - Look through the landing pages imagery and call to actions.

    - Follow the call to actions either to products or more in depth information.

    - Navigate to the FAQ page to further enhance knowledge of the product.
    
    - Move onto the events page to further enhance their knowledge of this type of business and it's products.

    - Sign up to the newsletter to receive offers and more information about these products.

    - Through informative content discover the best product for their needs.

    - Purchase said products and create an account to save order details.

    - Remain a regular user to the site due to an enjoyable website experience and a connection made with the brand through this.

---

#### Scope | Trade Off

- **The main features and content in the initial design plan that are of the highest priority are;**

    - Fully responsive website regardless of viewing device size.

    - Detailed information/about sections.

    - Detail product descriptions.

    - A blog page that contains all the latest news.

    - Eye catching CTA's using imagery and copy. 

    - Allow users to create accounts and have full CRUD functionality over this.

    - A secure payment system.

    - Validated and error free forms or various types.

    - Search functionality of products on the website.

    - The ability for users to leave reviews for products and allow these users to have CRUD functionality over their own reviews.

    - This website will include pages such as;
        - Homepage
        - Blog Page
        - Products page - organised into product types/categories
        - FAQ Page
        - Profile page
        - Register/login page
        - Relevant purchasing pages - cart, checkout etc

- **The features and content in the initial design plan that are of a lower priority and may not be including in this build are;**

    - Related/recommended products to be displayed whilst viewing certain products.

    - Testimonials of the brand and products.

    - New/special product carousels.

    - A gallery section containing products and these products in use.

    - Multiple product images on product pages.
    
    - The ability for users to add further information to their profile page such as preferences, images, bio descriptions etc.

    - A functioning and correct Instagram feed display showing the brands most up to date posts.

---

#### Structure

- The basic structure of the website is;

- Header/Navigation - *Top Level*

    - This website will use a standard navigation bar, there is no need for this to be a fixed navbar as there will be a back to top button implemented throughout the site for UX purposes.

    - The main navbar will collapse on medium screen sizes into a hamburger menu, but the functionality will remain the same.

    - The navigation menu will feature a search bar allowing the user to immediately search the sites products.

    - The header section will include and eye catching hero image alongside information, snappy hero text that acts as a call to action. This feature will include well thought out white space and on brand colours.

- Body - *Main Page Elements*

    - There will be a combination of copy and images used as CTA's and information conveying sections.

    - The landing page will feature a grid layout that makes use of cards with product categories that act as links to the category selected. Relevant icons will also be used on these cards as a way to further enhance the users understanding of the products.

    - The Products page overview will be in a typical e-commerce grid layout that includes some minimal product information such as name and price.

    - Individual product pages will include a main product image and a short description with price at the top level. Then further down there will be a detailed description, further images and product reviews.

    - The pages specific to using forms will have minimal to none additional content in order for the forms to be the main focus point.

    - The layout of the FAQ page will be in a accordion style with the FAQ title being displayed alongside an icon, then once selected the FAQ copy will be displayed.

    - The blog page will make use of alternative card layouts with aesthetically pleasing animation effects.

    - Newsletter sign up form will be displayed in a cta style format that is bold and eye catching.

- Footer - *Bottom Level*

    - A repeated navigation menu to reduce the need for the user to scroll up to continue navigating.

    - Social media links placed here to ensure the user does not navigate away from the page to soon.

    - Copyright and legal information placed here.
    
    - The websites logo to reinforce the users awareness of the company.

---

#### Wireframes

- [Desktop website view](wireframes/cbd-shield-desktop.pdf)

- [Tablet website view](wireframes/cbd-shield-tablet.pdf)

- [Mobile website view](wireframes/cbd-shield-mobile.pdf)

## Design

### Colour Scheme

- The colour scheme for this website contains three colours a main, secondary and accent colour, there will also be darker tones of these colours to improve accessibility. There will also be typical success and error colours used such as variations of green and red. The three main colours used within this site are all colours taken from the brands logo, this keeps the website on-brand and professional looking. There will also be a heavy emphasis on using white space, this is to give a clinical feel to the website in a positive way. The idea behind this is to increase users trust in the products by portraying that they are created by medical professionals, which they are.

- Feigoa (#9AE17A) - Primary Colour - A mid tone pale green that features as the main colour in the logo. This green relates well with the type of products being sold and adds a fun, enjoyable tone to the colour palette.

- Fern (#6BBA62) - Primary Alternate Colour - A slightly darker shade of Feigoa, this colour will be used to increase readability of copy to ensure accessability is high. As well as this it will also add slight but effective contrast when used alongside the primary colour.

- Oracle (#327270) - Secondary Colour - A blue, grey and green toned colour that works exceptionally well alongside the primary colour. This colour will be used to break up sections and add contrast to important features making them stand out to the user.

---

### Typography

- There will be two fonts used throughout the website. The font Poiret One will be used as the site title font and logo font, however if fitting, it may also be used for certain body elements such as buttons. The body font used will be Raleway which has many similar aspects to the title font since they are both Sans-serif with art-deco styles making them work extremely well together.

- **Poiret One** - A fresh decorative geometric grotesque with a hint of Art Deco and c‘onstructivism. Poiret One is a unique typeface with light forms and pure elegance based on geometric forms.

- **Raleway** - Raleway is an elegant sans-serif typeface, designed in a single thin weight. It is a display face that features both old style and lining numerals, as well as a stylistic alternate inspired by more geometric sans-serif typefaces.

---

### Logo

- The logo for this project was generated through [Hatchful](https://hatchful.shopify.com/) for the initial design, I then customised the font and colours. The colours were chosen to further enhance a customers understanding of the brands values focusing on using natural ingredients in a sustainable way which is why the green variants are so important. This is also the reason behind the seedling sprouting used in the logo which further evokes these emotions. This then led to the choice of an art-deco style font which adds a clean, modern and stylish feel to the logo as well as giving the brand a sought after luxury feel.

---

### Imagery

- Imagery will be featured throughout this website in such features as hero's, cta's, products, faq/about, and general content sections. There will be a mix of imagery subjects such as athletes and sportspeople, general lifestyle, and environmental subject matters. Other than specific product images all other images will feature a person as a subject, whether this be using the products, lifestyle images of desireable subjects, or athletes taking part in their sport. The reason for using these types of images is to make the use of the products relatable to the consumer, as well as displaying the varied healing/recovery uses of the products.

- Icons will be featured throughout this site with minimalist use. The main section featuring icons will be a category card display that uses icons to portray the different uses of those products. Icons may also feature to add small details of illustration to sections as well as in some hover effects.

## Database Model

- This project uses two types of databases, one for local development and one for the deployed production version. Locally it uses Django's built in [MySQL](https://www.mysql.com/) database. For the deployed version the database used is [PostgreSQL](https://www.postgresql.org/) with psycopg for performance reasons.

- [MySQL](https://www.mysql.com/) - is an open-source relational database management system. A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database.

- [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

---

### Database Schema

- The database schema for this project can be split into two main models, users and products. Both of these models are relational to each other and also have further relation models listed below.

- Users - Other relational models to the users table are;
    - Profile - This can only be created if the user has registered and confirmed their email address. The details to populate the profile are taken from the user model such as email and name.
    - Reviews - Reviews can only be added by authenticated users, when a user adds a new review the review is saved to the database with the users email address attached.
    - Newsletter - The newsletter sign up form is available to all users of the site. Once the form is validated the users email address is stored in the Newsletter model.

- Products - Other relational models to the products table are;
    - Orders - These are created when the user completes an order, it contains product details as well user details, which if selected will be added to the profile model.
    - Categories - The category pk number is shared with the product model in order to effectively assign categories to the products.
    - Order Line Items - This is created when the user completes an order and only holds the product details which are then shared with the profile model.

See image below for the database model created for this project.

![Database model diagram chart](readme-screenshots/database-model.png)

## Features

### Existing Features

- Responsive on all devices

- All clickable elements contain an interaction animation

- Toast Success, error, info and warning messages are displayed throughout the site whenever there is user interaction required,

- Custom error pages

- All forms are validated using a combination of Python, Javascript and HTML attributes

- Auto updating shopping cart feature.

- A back to top button implemented throughout that only displays once the user has scrolled down the page a sufficient amount. This is to
improve the UX of the site.

- A search bar placed in the main navigation to allow users to quickly search for products.

---

#### Specific Landing Page Features

- A hero that includes a call to action that directs users to the sites ecommerce section.

- A category section that shows all the medical/health benefits of the products that act as links to the shop with a search query for those specific categories.

- About section that gives further insight into the company and it's products as well as a link to the FAQ page for further info.

- Newsletter sign up form

---

#### Specific Shop Page Features

- Interactive cards displaying all the products with the category icon displayed on the card and a 'quick' add to cart button.

- A dropdown list that allows the user to sort products by price and category.

---

#### Specifc Single Product Page Features

- If user is admin they can access the product management section through links displayed.

- Review form that allows authenticated users to post a product review.

- Ability to add varying quantities of the product to their individual cart.

- A back button to direct the user back to the products page to improve UX.

---

#### Specific Blog Page Features

- Alternatively designed card elements that feature a post excerpt, post published date and time and a link to the full post.

---

#### Specific FAQ Page Features

- Accordion used to display FAQ content in an informative and interactive way to the user without cluttering the page with content.

---

#### Specific Cart Page Features

- A responsive table displaying the users shopping cart.

- Adjustable product quantity input with full functionality.

---

#### Specific Checkout Page Features

- Integrated Stripe payment element.

- Validated user details and delivery form.

- Functioning checkbox to save users details to profile.

- Responsive table showing cart contents.

---

#### Specific Profile Page Features

- Users delivery information that can be amended and updated.

- Responsive table displaying previous order history.

---

### Future Features

- Testimonial slideshow on FAQ page.

- User wishlist allowing authenticated users to add products to their wishlist.

- A products carousel on the landing page that chooses random products to display to the user.

- A contact form page to replace the footer Contact ```mailto:``` link.

- Add pagination to the products and blog page to reduce the need to scroll and improve overall UX.

- Improve the Profile page by allowing users to upload profile pictures and add further information such as a bio.

## Technologies Used

### Syntax

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - HTML5 is a markup language used for structuring and presenting content on the internet.

- [CSS](https://en.wikipedia.org/wiki/CSS)
    - Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.

- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    - Javascript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many
    non-browser environments as well.

- [Python](https://www.python.org/)
    - Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.

---

### Frameworks, Libraries & Programmes

- [Balsamiq](https://balsamiq.com/)
    - The Balsamiq application was used to create wireframes for each website page on various device screen sizes.

- [Font Awesome](https://fontawesome.com/)
    - Used to display icons as well as the social media icons in the footer.

- [Icons 8](https://icons8.com/)
    - Used for the category icons.

- [Online PNG Tools](https://onlinepngtools.com/)
    - Used for editing png images, specifically giving transparent backgrounds.

- [SVG OMG](https://jakearchibald.github.io/svgomg/)
    - A web app that takes an svg image and converts the code into clean inline svg code.

- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap was used throughout the site for responsiveness using the grid system, all forms and all modals.

- [Google Fonts](https://fonts.google.com/)
    - Used to import the two fonts used throughout the site 'Lora' and 'Open Sans'.

- [GitHub](https://github.com/)
    - Used to host the entire repository for the project.

- [GitPod](https://gitpod.io/workspaces/)
    - The code editor used to build the entire project.

- [TinyPNG](https://tinypng.com/)
    -  Used this to compress all the images used on the website to decrease the file size and increase website load speed.

- [Favicon](https://favicon.io/)
    - Used to generate the websites favicon logo of various sizes for different devices.

- [Am I Responsive](http://ami.responsivedesign.is/)
    - A tool to check how the website appears and the functionality on various devices. The image at the top of this document was generated from this website.

- [Responsinator](http://www.responsinator.com/)
    - Similar to [Am I responsive](http://ami.responsivedesign.is/) this is a web based application that allows a website to be checked an a large amount of devices in portrait and 
    landscape view.

- [W3C Validator HTML](https://validator.w3.org/) & [W3C Validator CSS](https://jigsaw.w3.org/css-validator/)
    - Both of these were used to test all the code for the project whilst working and for the finished website to check for valid HTML and CSS.

- [JSHint](https://jshint.com/)
    - This is a tool used to detect errors or potential problems within Javascript code, it was used to test and validate all Javascript written for this project.

- [CSS Autoprefixer](https://autoprefixer.github.io/)
    - This was used to add vendor prefixes to the CSS used in the project to increase cross browser compatibility.

- [Pylint](https://www.pylint.org/)
    - Pylint is a source-code, bug and quality checker for the Python programming language.

- [Heroku](https://www.heroku.com)
    - Heroku is a cloud platform as a service supporting several programming languages including Java, Node.js, Scala, Clojure, Python, PHP, and Go.

- [AWS](https://aws.amazon.com/)
    - Amazon Web Services, Inc. is a subsidiary of Amazon providing on-demand cloud computing platforms.

- [JQuery](https://jquery.com/)
    - jQuery is a JavaScript library that allows web developers to add extra functionality to their websites. It is open source and provided for free under the MIT license.

- [Django](https://www.djangoproject.com/)
    - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.

- [Project Dependencies](requirements.txt)
    - There are many Python based libraries used throughout this project to enhance productivity and improve the application, these along 
    with the installed version can be viewed in the apps [requirements file](requirements.txt).

- [Stripe](https://stripe.com/en-gb)
    - Stripe primarily offers payment processing software and application programming interfaces for e-commerce websites and mobile applications.

## Testing

Find all information on the testing that has been carried out for this project [here.](TESTING.md)

## Deployment

Find all information on the deployment of this project [here.](DEPLOYMENT.md)

## Credits