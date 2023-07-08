const d=document;
let ratingStarInput=[...d.querySelectorAll('.reting-star')];

ratingStarInput.map((star, index)=>{
    star.addEventListener('click', ()=>{
        for(let i=0; i<5; i++){
            if(i<=index){
                ratingStarInput[i].src=`Img/fill star.png`;
            } else{
                ratingStarInput[i].src=`Img/no fill star.png`;
            }
        }
    })
})
