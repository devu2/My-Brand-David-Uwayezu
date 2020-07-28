const filtersButtons = document.querySelector("#filters-buttons").children;
const items = document.querySelector(".gallery").children;



for (let  i = 0; i<filtersButtons.length;i++){
    filtersButtons[i].addEventListener("click",function(){
        // add active class to clicked button
        for(let j=0;j<filtersButtons.length;j++){
            filtersButtons[j].classList.remove("active") //removing active class from all buttons
        }
        this.classList.add("active"); // add active class to clicked button
        const targets = this.getAttribute("data-target"); 
        for(let k = 0; k < items.length; k++){
            items[k].style.display="none";
            if (targets == items[k].getAttribute("data-id")){
                items[k].style.display="block";
            }
            if(targets=="all"){
                items[k].style.display="block";
            }
        }
    })
}
const closeLightBox = document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".plus-icons");
const lightboxImage = document.querySelector("img");
closeLightBox.addEventListener("click",function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})
const gallery=document.querySelector(".gallery");
const galleryItems=gallery.querySelectorAll(".item");
galleryItems.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide");
        lightbox.classList.add("show");

    })
})


