// Code taken from https://stripe.com/docs/payments/accept-a-payment and customised for this project

let stripe_public_key = document.getElementById("id_stripe_public_key").innerHTML.slice(1, -1);
let client_secret = document.getElementById("id_client_secret").innerHTML.slice(1, -1);

let stripe = Stripe(stripe_public_key);
let elements = stripe.elements();

let style = {
    base: {
        color: '#000',
        fontFamily: '"Raleway", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '1.15rem',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#F25C66',
        iconColor: '#F25C66'
    }
};

let card = elements.create("card", {style: style});
card.mount("#card-element");