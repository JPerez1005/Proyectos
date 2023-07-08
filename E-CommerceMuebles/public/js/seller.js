window.onload=()=>{
    let user = JSON.parse(sessionStorage.user || null);

    if (user==null) {
        location.replace('/login');
    } else if(user.seller){
        location.replace('/dashboard');
    }
};

const d = document;
const loader = d.querySelector('.loader');
const applyBtn = d.querySelector('.apply-btn');

applyBtn.addEventListener('click', () => {
    let businessName = d.querySelector('#name').value;
    let address = d.querySelector('#address').value;
    let about = d.querySelector('#about').value;
    let number = d.querySelector('#number').value;

    if (!businessName.length || !address.length || !about.length || number.length < 10 || isNaN(number)) {
        showFormError('Some information is incorrect.');
    } else {
        // send data
        loader.style.display = 'block';
        sendData('/seller', {
            name: businessName,
            address: address,
            about: about,
            number: number,
            email: JSON.parse(sessionStorage.user).email
        })
    }
});
