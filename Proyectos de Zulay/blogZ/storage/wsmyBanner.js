export let wsmyBanner ={
    showmyBanner(this){
        let plantilla = `
        <h1 class="display-4 fst-italic">${this.title}</h1>
        <p class="lead my-3">${this.paragraph}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>
        `
        return plantilla;
    }
};

self.addEventListener("message",(e)=>{
    postMessage(wsmyBanner[`${e.data.module}`](e.data.data));
});