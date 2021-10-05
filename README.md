# CBD Shield

[View Live Project Here](#)

![Screenshot of landing page on multiple devices](#)

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

    - Fixed navigation bar.

    - Detailed information/about sections.

    - Detail product descriptions.

    - New/special product carousels.

    - Eye catching CTA's using imagery and copy. 

    - Allow users to create accounts and have full CRUD functionality over this.

    - A secure payment system.

    - Validated and error free forms or various types.

    - Search functionality of products on the website.

    - The ability for users to leave reviews for products and allow these users to have CRUD functionality over their own reviews.

    - Testimonials of the brand and products.

    - This website will include pages such as;
        - Homepage
        - Events Page
        - Products page - organised into product types/categories
        - FAQ Page
        - Profile page
        - Register/login page
        - Contact page
        - Relevant purchasing pages - cart, checkout etc

- **The features and content in the initial design plan that are of a lower priority and may not be including in this build are;**

    - Related/recommended products to be displayed whilst viewing certain products.

    - A blog page that contains all the latest news.

    - A gallery section containing products and these products in use.

    - Multiple product images on product pages.
    
    - The ability for users to add further information to their profile page such as preferences, images, bio descriptions etc.

    - A functioning and correct Instagram feed display showing the brands most up to date posts.

---

#### Structure

- The basic structure of the website is;

- Header/Navigation - *Top Level*

    - This website will use a fixed navigation bar that hides the menu items unless the user is scrolling upwards, which will then cause the navbar to display itself in a smooth animation. The reason for this UI decision is to avoid hiding any content and cluttering of the page enhancing the UX.

        - The main navbar will collapse on medium screen sizes into a hamburger menu, but the functionality will remain the same.

    - There will also be a sub navigation menu included that will feature a search bar allowing the user to immediately search the sites products.

    - The header section will include and eye catching hero image alongside information, snappy hero text that acts as a call to action. This feature will include well thought out white space and on brand colours.

- Body - *Main Page Elements*

    - There will be a combination of copy and images used as CTA's and information conveying sections.

    - The landing page will feature a grid layout that makes use of cards with product categories that act as links to the category selected. Relevant icons will also be used on these cards as a way to further enhance the users understanding of the products.

    - The Products page overview will be in a typical e-commerce grid layout that includes some minimal product information such as name and price.

    - Individual product pages will include a main product image and a short description with price at the top level. Then further down there will be a detailed description, further images and product reviews.

    - The pages specific to using forms will have minimal to none additional content in order for the forms to be the main focus point.

    - The layout of the FAQ page will be in a accordion style with the FAQ title being displayed alongside an icon, then once selected the FAQ copy will be displayed.

    - The events page will make use of alternative card layouts with aesthetically pleasing animation effects.

- Footer - *Bottom Level*

    - Newsletter sign up form displayed within the footer but above all other content as top priority.

    - A repeated navigation menu to reduce the need for the user to scroll up to continue navigating.

    - Social media links placed here to ensure the user does not navigate away from the page to soon.

    - Copyright and legal information placed here.
    
    - The websites logo to reinforce the users awareness of the company.

---

#### Wireframes

- [Desktop website view](#)

- [Tablet website view](#)

- [Mobile website view](#)

