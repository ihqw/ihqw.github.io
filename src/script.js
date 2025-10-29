document.addEventListener("DOMContentLoaded", function() {
    const text = "ihqw.github.io";

    const header = document.getElementById('header');
    header.innerText = '';
    
    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
            header.innerHTML += text.charAt(i);
        }, 75 * i);
    }
});