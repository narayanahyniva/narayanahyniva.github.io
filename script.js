// DevOps Portfolio JavaScript


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});




// Simple scroll animation

const cards = document.querySelectorAll(".card, .project");


const observer = new IntersectionObserver(entries => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";


        }


    });


});



cards.forEach(card => {


    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition = "all 0.6s ease";


    observer.observe(card);


});





// Current year update

const footer = document.querySelector("footer p");


if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Narayana Kanaka | Cloud DevOps Engineer`;

}