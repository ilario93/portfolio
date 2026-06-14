// for(let i = 0; i<10 ; i++){
//     let skill = document.getElementById('skill'+i);
//     let parent = skill.parentElement;
//     skill.addEventListener("click",()=>{ 
//         // parent.style.height=parent.offsetHeight + "px";
//         // parent.style.width=parent.offsetWidth + "px"; 
//         if(!skill.hasAttribute("modified")){
//             skill.style.animation="skill-lightbox 1s ease forwards";
//             skill.firstElementChild.style.display="none";
//             parent.firstElementChild.style.display="none";
//             parent.style.padding=0;
//             skill.setAttribute("modified","true");
//             setTimeout(() => {
//                 skill.lastElementChild.style.display="block";
//               }, 300);
//     }else{
//         skill.style.animation="skill-lightbox-reverse 1s ease-in forwards";
//         skill.firstElementChild.style.display="block";
//         skill.lastElementChild.style.display="none";
//         parent.firstElementChild.style.display="block";
//         parent.style.padding="2rem";
//             skill.removeAttribute("modified");    

//             skill.addEventListener("animationend", function resetSize(event) {
//                 if (event.animationName === "skill-lightbox-reverse") {
//                     skill.style.removeProperty("animation");
//                 skill.removeEventListener("animationend", resetSize);
//                 }
//             });   
                           
//  }
//  })



// }

