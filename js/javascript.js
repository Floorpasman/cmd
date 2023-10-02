const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const form = document.querySelector("form");

form?.addEventListener("submit", (e) => {
    e.preventDefault(); // 'normale' actie word tegengehouden

    const age = document.querySelector("#leeftijd").value;

    if (age >= 18) {
        form.submit();
    } else {
        alert("U moet 18 jaar of ouder zijn om door te gaan.");
    }
});

// Bron 1:Stackoverflow (2019). Use addEventListener to Change display style.

const logo = document.querySelector(".nav-branding");
const confetti = document.getElementById('confetti')

logo.addEventListener('click', function(){
    confetti.style.display = 'block';
    
}
)
