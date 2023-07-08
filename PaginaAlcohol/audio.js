// const d=document;
const $inicio=document.getElementById("inicio"),
$registro=document.querySelector('.register-link'),
$login=document.querySelector('.login-link'),
$Login=document.getElementById("Login"),
w=window;//varias funciones en un mismo evento


$Login.addEventListener("click"/*recordar q esto es un tipo de evento*/,(e)=>{
    let texto="Este es el Login";

    const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
});

d.addEventListener("DOMContentLoaded", e=>{
    let texto="Bienvenido al inicio de la pagina web";
    const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
});

$inicio.addEventListener("click", e=>{
    let texto="Bienvenido al inicio de la pagina web";
    const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
});

$registro.addEventListener("click", e=>{
    let=texto="Usted ésta registrandose en nuestra Pagina Web";
    const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
});

$login.addEventListener("click", e=>{
    let=texto="usted está ingresando en nuestra Pagina Web";
    const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
});

let mensaje = new SpeechSynthesisUtterance();
let hablado = false,h2=false,h3=false;

w.addEventListener("scroll", e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

  if (scrollTop > 580 && !hablado) {
    mensaje.text = "Aquí encontrará algunos de nuestros productos";
    speechSynthesis.speak(mensaje);
    hablado = true;
  }else if (scrollTop < 580) {
    hablado = false;
  }
//   hablado=false;
});

w.addEventListener("scroll", e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

  if (scrollTop > 1500 && !h2) {
    mensaje.text = "Aquí se encuentra nuestra cobertura junto con nuestro articulo mas vendido";
    speechSynthesis.speak(mensaje);
    h2 = true;
  }else if (scrollTop < 1500) {
    h2 = false;
  }
//   hablado=false;
});

w.addEventListener("scroll", e => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

  if (scrollTop > 2300 && !h3) {
    mensaje.text = "Aquí se encuentran las empresas que lideran el mercado junto con los productos mas populares";
    speechSynthesis.speak(mensaje);
    h3 = true;
  }else if (scrollTop < 2300) {
    h3 = false;
  }
//   hablado=false;
});
