import STRIPE_KEYS from "./stripe-keys.js";//como es importacion deault le puedo colocar ese nombre

const d=document,
$licores=d.getElementById("licores"),
$template=d.getElementById("licor-template").content,
$fragment=d.createDocumentFragment(),
fetchOptions={//menú de promesas
    headers:{
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
};

let prices,products;//creamos las variables que guardaran los enlaces

const moneyFormat=(num)=>`$${num.slice(0,-2)}.${num.slice(-2)}`;//Así le quitamos al precio 

Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions)
])
.then(responses=>Promise.all/*ahora no es res por que son muchas respuestas(responses) de las promesas*/
(responses.map((res)=>res.json())/*a las respuestas les creamos un arreglo*/))
.then(json=>{
    // console.log(json);//muestra todos los datos de esos objetos así que...
    products=json[0].data;//solo buscamos los datos necesarios de la respuesta
    prices=json[1].data;
    console.log(products, prices);//aquí solo mostramos los datos necesarios

    prices.forEach(el=>{//por cada elemento del arreglo de precios
        let productData=products.filter/*Hacemos un filtro*/
        ((product)=>product.id===el.product);/*hacemos la comparación del id del producto y de la varible precio.producto*/

        console.log(productData);

        $template.querySelector(".licor").setAttribute("data-price", el.id);//Agregamos un data-rice como el id del producto
        $template.querySelector("img").src=productData[0].images[0];//en el elemento source linkeamos la imagen en la etiqueta img
        $template.querySelector("img").alt=productData[0].name;//la img con alt la nombramos
        $template.querySelector("figcaption").innerHTML=`
        ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
        `//la nombramos, le colocamos el precio junto al tipo de moneda


        let $clone=d.importNode($template, true);//clonamos todos los datos de los templates
        $fragment.appendChild($clone);//usamos los fragmentos para reducir el rendimiento
    });

    $licores.appendChild($fragment);//insertamos la información

})
.catch(err=>{//en caso de error
    console.log(err);
    let message=err.statusText || "Hay un error al conectarse con la API";
    $licores.innerHTML=`<p>Error ${err.status}: ${message}</p>`;
});

d.addEventListener("click", (e)=>{
    if(e.target.matches(".licor *")){
        let price=e.target.parentElement.getAttribute("data-price");

        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems:[{price, quantity: 1}],
            mode: "subscription",
            successUrl: "http://127.0.0.1:5500/Ejercicos%20del%20AJAX/ProyectoPagos/stripe-success.html",
            cancelUrl:"http://127.0.0.1:5500/Ejercicos%20del%20AJAX/ProyectoPagos/stripe-cancel.html"
        })
        .then(res=>{
            console.log(res);
            if(res.error){
                $licores.insertAdjacentHTML("afterend", res.error.message)
            }
        });
    }
});





//A continucaión está el codigo de cada opcion de la api, en este ejemplo estan los productos y precios
//La razón por la cual no usamos este codigo es por que unimos las opciones en solo una promesa
//para así no tener dos o mas promesas de las necesarias
// fetch("https://api.stripe.com/v1/products", {//manejo de productos
//     headers: {
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`,
//     }
// })
// .then(res=>{
//     console.log(res);
//     return res.json();
// })
// .then((json)=>{
//     console.log(json);//aquí estamos mostrando la informacion de nuestros productos
// });

// fetch("https://api.stripe.com/v1/prices", {//manejo de precios
//     headers: {
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`,
//     }
// })
// .then(res=>{
//     console.log(res);
//     return res.json();
// })
// .then((json)=>{
//     console.log(json);//aquí estamos mostrando la informacion de nuestros productos
// });