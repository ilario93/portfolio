for(let i = 1; i<4 ; i++){
    let button = document.getElementById('but'+i);
    let parent = button.parentElement;
    button.addEventListener("click",()=>{
        button.setAttribute("modified","true");
        for(let j = 1; j<4; j++){
            document.querySelectorAll('.projectbut'+j).forEach(frame => {
                frame.style.display = "none";
            });
            let but = document.getElementById("but"+j);
                but.style.color="black";
                but.style.border="none"
        } 
        button.style.color="var(--main-color)";  
        button.style.borderBottom = "2px solid var(--main-color)"    
        document.querySelectorAll('.projectbut'+i).forEach(frame => {
            frame.style.display = "flex";
            frame.style.animation = "fade 1s ease";
            for(let child of frame.childNodes){
                if (child.nodeType === 1) { 
                    child.style.opacity=0; 
                }
            }
            setTimeout(function(){
                for(let child of frame.childNodes){
                    if (child.nodeType === 1) { 
                        child.style.opacity=0; 
                        child.style.animation = "fade 1s ease forwards";
                    }
                }
            },500)
           
        });
     })

}