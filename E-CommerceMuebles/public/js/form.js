const d=document;

// imposible alterar la url con la siguiente función
window.onload=()=>{
    if (sessionStorage.user) {
        user=JSON.parse(sessionStorage.user);
        if (user.email) {
            location.replace('/');
        }
    }
}


// form
let formBtn=d.querySelector('.submit-btn');
let loader=d.querySelector('.loader');
let contenedor=d.querySelector('.form-section');

formBtn.addEventListener('click', ()=>{
    let fullname=d.querySelector('#name') || null;
    let email=d.querySelector('#email');
    let password=d.querySelector('#password');
    let number=d.querySelector('#number') || null;
    let tac=d.querySelector('#tc') || null;

    if(fullname != null){// singup page
            // form validation
        if(fullname.value.length<3){
            showFormError('name must be 3 letters long');
            contenedor.style.filter=`blur(0px)`;
        } else if(!email.value.length){
            contenedor.style.filter=`blur(0px)`;
            showFormError('enter your email');
        } else if(password.value.length<8){
            contenedor.style.filter=`blur(0px)`;
            showFormError('password must be 8 letters long');
        } else if(isNaN(number.value) || number.value.length<10){
            contenedor.style.filter=`blur(0px)`;
            showFormError('invalid number, please enter valid one');
        } else if(!tac.checked){
            contenedor.style.filter=`blur(0px)`;
            showFormError('you must agree to our terms and conditions');
        } else{
            // submit form
            loader.style.display='block';
            contenedor.style.filter=`blur(3px)`;
            sendData('/signup', {
                name: fullname.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
            })
        }
    } else{// login page
        if (!email.value.length || !password.value.length) {
            showFormError('fill all the inputs')
            contenedor.style.filter='blur(0px)';
        }else{
            // submit form
            loader.style.display='block';
            contenedor.style.filter=`blur(3px)`;
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }

})
