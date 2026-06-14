for(let i = 1; i<7 ; i++){
    let button = document.getElementById('nav'+i);
    let parent = button.parentElement;
    button.addEventListener("click",()=>{
        button.setAttribute("modified","true");
        for(let j = 1; j<7 ; j++){
            let frame = document.getElementById("blocnav"+j);
            frame.style.display="none";
            let but = document.getElementById("nav"+j);
                but.style.color="black";
                but.style.border="none"
        } 
        button.style.color="var(--main-color)";  
        button.style.borderBottom = "2px solid var(--main-color)"    
        let frame = document.getElementById("blocnav"+i);
        frame.style.display="block";
     })

}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button2');
    const overlay = document.querySelector('.overlay');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });
    
    document.querySelectorAll('.button1').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
            overlay.style.display = 'none';
        });
    });
    
    overlay.addEventListener('click', function() {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        this.style.display = 'none';
    });
});