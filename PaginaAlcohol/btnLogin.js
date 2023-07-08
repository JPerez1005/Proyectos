const w=window;
const $scrollBtn=d.querySelector('.btnLogin-popup');
w.addEventListener("scroll", e=>{
    //por si pageyoffset no existe en ese navegador entonces optamos por la otra opción
    let scrollTop=w.pageYOffset||d.documentElement.scrollTop;

    if (scrollTop<200) {
        $scrollBtn.classList.remove("hidden");
    }else{
        $scrollBtn.classList.add("hidden");
    }
    // console.log(w.pageYOffset, d.documentElement.scrollTop);
});

// d.addEventListener("click", e=>{
//     if (e.target.matches(btn)) {//si el objeto que originó el evento aparece
//         w.scrollTo({
//             behavior:"smooth",
//             top: 0,
//         }); 
//     }
// });