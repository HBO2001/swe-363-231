window.addEventListener("load",() =>{

    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transisioned", () => {
        document.body.removeChild("loader");
    })
})