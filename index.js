let main_button = document.getElementById("main_button");
let main_menu = document.getElementById("main_menu");

main_button.addEventListener("Click", () => {
    main_menu.classList.toggle("hidden");
})