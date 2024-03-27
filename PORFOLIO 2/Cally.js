const Details = document.querySelectorAll(".Detail");

Details.forEach(Detail => {
    Detail.addEventListener("click", () => {
        Detail.classList.toggle("active");
    });
});








