document.body.contentEditable='true'; 

document.querySelectorAll('div,p,span,img,a,body').forEach((elem) => {
    elem.style.transform = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
})

document.head.innerHTML += ` 
<style> 
body {
    animation-delay: 0s;
    animation: barrelRoll 4s infinite;
}

@keyframes barrelRoll {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(1.5turn);
    }
  } 
</style> `;
