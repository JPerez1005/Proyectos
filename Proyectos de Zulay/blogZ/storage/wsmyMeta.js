export let wsmyMeta ={
    displayMeta(metas){
        let plantilla ="";
        metas.forEach((val,id) => {
            plantilla += `
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.Date} <a href="#">Mark</a></p>
            <p>${val.article1}</p>
            <p>${val.article2}</p>
            <h2>${val.blockH2}</h2>
        <blockquote class="blockquote">
            <p>${val.blockP}</p>
        </blockquote>
            <p>${val.article3}</p>
            <h3>${val.titleH3}</h3>
            <p>${val.article4}</p>
        <ul>
            <li>${val.list[0]}</li>
            <li>${val.list[1]}</li>
            <li>${val.list[2]}</li>
            <li>${val.list[3]}</li>
            <li>${val.list[4]}</li>
        </ul>
            <p>${val.article5}</p>  

            `
            
        });
    }
};
self.addEventListener("message",(e)=>{
    postMessage(wsmyMeta[`${e.data.module}`](e.data.data));
});