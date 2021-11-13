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

/**
 * Handle and display any errors when submitting payment
 * Display loading animation
 * Add overlay class to page section
 * Remove these if error occurs
 * */

const form = document.getElementById('payment-form');

form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    card.update({ 'disabled': true});
    document.getElementById('submit-order').disabled = true;
    document.getElementById('loading-overlay').style.display = 'block';
    document.getElementById('checkout-container').className = 'overlay-filter';
    // For Safari
    document.body.scrollTop = 0;
    // For all other browsers
    document.documentElement.scrollTop = 0;
    // Save user details
    const userInfo = document.getElementById('save-user-info');
    const saveInfo = Boolean(userInfo.checked);
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const postData= {
        'csrfmiddlewaretoken': csrfToken,
        'client_secret': clientSecret,
        'save_info': saveInfo,
    };
    // Post user details to cache_checkout_data
    const url = '/checkout/cache_checkout_data/';
    $.post(url, postData).done(function() {
        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: form.full_name.value.trim(),
                    phone: form.phone_number.value.trim(),
                    email: form.email.value.trim(),
                    address:{
                        line1: form.street_address1.value.trim(),
                        line2: form.street_address2.value.trim(),
                        city: form.town_or_city.value.trim(),
                        country: form.country.value.trim(),
                        state: form.county.value.trim(),
                    }
                }
            },
            shipping: {
                name: form.full_name.value.trim(),
                phone: form.phone_number.value.trim(),
                address:{
                    line1: form.street_address1.value.trim(),
                    line2: form.street_address2.value.trim(),
                    city: form.town_or_city.value.trim(),
                    country: form.country.value.trim(),
                    postal_code: form.postcode.value.trim(),
                    state: form.county.value.trim(),
                }
            },
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
                document.getElementById('loading-overlay').style.display = 'none';
                document.getElementById('checkout-container').classList.remove('overlay-filter');
                card.update({ 'disabled': false});
                document.getElementById('submit-order').disabled = false;
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    form.submit();
                }
            }
        });
    }).fail(function() {
        location.reload();
    });
});