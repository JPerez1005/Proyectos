const d=document;

let user = JSON.parse(sessionStorage.user || null);

if (user == null) {
    location.replace('/login');
}else if(!user.seller){
    location.replace('/seller');
}

let greeting=d.querySelector('#seller-greeting');

greeting.innerHTML += user.name;
