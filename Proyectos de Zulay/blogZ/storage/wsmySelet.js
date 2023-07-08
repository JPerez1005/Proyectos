export let wsmySelet ={
    displaySelet(selets){
        let plantilla ="";
        selets.forEach((val,id) => {
            plantilla += `
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.Date}<a href="#">Jacob</a></p>
  
           <p>${val.article1}</p>
           <p>${val.article3}</p>
           <p>${val.article3}</p>
           <h3>${val.titleH3}</h3>
           <p>${val.article4}</p>
           <p>${val.article5}</p>
  
           
           <table class="table">  
           <thead>
          <tr>
              <th>${val.table[0]}</th>
              <th>${val.table[1]}</th>
              <th>${val.table[2]}</th>
              
          </tr>
          
           </thead>
         <tbody>
           <tr>  
           <th>JUNGKOOK</th>
              <th>25</th>
              <th>1997</th>
              
           </tr>
             
           <tr>
           <th>JIMIN</th>
              <th>27</th>
              <th>1995</th>
              
           </tr>
           <tr>  
           <th>TAE-HYUNG</th>
              <th>27</th>
              <th>2995</th>
              
           </tr>
             
           <tr>
           <th>JIN</th>
              <th>31</th>
              <th>1992</th>
              
           </tr>
           <tr>  
           <th>J-HOPE</th>
              <th>29</th>
              <th>1994</th>
              
           </tr>
             
           <tr>
           <th>SUGA</th>
              <th>30</th>
              <th>1993</th>
              
           </tr>
           <th>RM</th>
              <th>29</th>
              <th>1994</th>
              
           </tr>
         </tbody>
         </table>
            `;
            
        });
    }
};
self.addEventListener("message",(e)=>{
    postMessage(wsmySelet[`${e.data.module}`](e.data.data));
});