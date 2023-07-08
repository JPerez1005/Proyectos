// navbar

const navbar=document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
    if (scrollY>=270) {
        navbar.classList.add('bg')
    } else{
        navbar.classList.remove('bg')
    }
})


const createNavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML+=`
    <ul class="links-container">
    <li class="linkitem"><a href="#" class="link active">home</a></li>
    <li class="linkitem"><a href="#" class="link">product</a></li>
    <li class="linkitem"><a href="#" class="link">about</a></li>
    <li class="linkitem"><a href="#" class="link">contact</a></li>
    </ul>
<div class="user-interactions">
    <div class="cart">
        <img src="Img/cart.png" class="cart-icon" alt="">
        <span class="cart-item-count">00</span>
    </div>
    <div class="user">
        <img src="Img/user.png" class="user-icon" alt="">
        <div class="user-icon-popup">
            <p>Login to your account</p>
            <a>login</a>
        </div>
    </div>
</div>
    `
}

createNavbar();

// user icon popup

let userIcon=document.querySelector('.user-icon');
let userPopupIcon= document.querySelector('.user-icon-popup');

userIcon.addEventListener('click', ()=> userPopupIcon.classList.toggle('active'))

let text = userPopupIcon.querySelector('p');
let actionBtn=userPopupIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);

if (user != null) { // user is Logged in
    text.innerHTML=`Log in as, ${user.name}`;
    actionBtn.innerHTML='Log out';
    actionBtn.addEventListener('click', () => logout())
} else {
    text.innerHTML='login to your account';
    actionBtn.innerHTML='login';
    // redirigir a la página de inicio de sesión
    // utilizando location.replace
    // actionBtn.addEventListener('click', () => location.href='/login');
    actionBtn.setAttribute('href', '/login.html');
}

const logout = () => {
    sessionStorage.clear()
    location.reload();
}