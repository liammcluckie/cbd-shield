// Code taken from https://stripe.com/docs/payments/accept-a-payment and customised for this project

/**
 * Retrieve public key and client secret key
 * Init stripe using the public key
 * Create card field styles and mount on card-element div
 */

const stripePublicKey = document.getElementById("id_stripe_public_key").innerHTML.slice(1, -1);
const clientSecret = document.getElementById("id_client_secret").innerHTML.slice(1, -1);

const stripe = Stripe(stripePublicKey);
const elements = stripe.elements();

const style = {
    base: {
        color: '#000',
        fontFamily: '"Raleway", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '18px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#F25C66',
        iconColor: '#F25C66'
    }
};

const card = elements.create("card", {style: style});
card.mount("#card-element");

// Display accurate validation errors on the card element

card.addEventListener('change', function(event) {
    const errorDiv = document.getElementById('card-errors');
    if (event.error) {
        errorDiv.innerHTML = `
            <span class="stripe-card-error" role="alert">
                <i class="far fa-times-circle"></i>
            </span>
            <span class="stripe-card-error">
                ${event.error.message}
            </span>
        `;
    } else {
        errorDiv.innerHTML = '';
    }
});

// Handle and display any errors when submitting payment

const form = document.getElementById('payment-form');

form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    card.update({ 'disabled': true});
    document.getElementById('submit-order').disabled = true;
    stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
        }
    }).then(function(result) {
        if (result.error) {
            const errorDiv = document.getElementById('card-errors');
            errorDiv.innerHTML = `
                <span class="stripe-card-error" role="alert">
                    <i class="far fa-times-circle"></i>
                </span>
                <span class="stripe-card-error">
                    ${result.error.message}
                </span>
            `;
            card.update({ 'disabled': false});
            document.getElementById('submit-order').disabled = false;
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                form.submit();
            }
        }
    });
});