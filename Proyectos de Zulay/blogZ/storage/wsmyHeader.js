export let wsmyHeader = {
    listTite(p1){
        return `<a class="blog-header-logo text-dark" href="${this.title}">${this.title.name}</a>`
    
    },
    displayCompany(p1){
        let plantilla ="";
        p1.forEach((val,id) => {
             plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        return plantilla;
    }
}

self.addEventListener("message",(e)=>{
    postMessage(wsmyHeader[`${e,data.data}`](e.data.data));
});