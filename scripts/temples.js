const year = document.querySelector("#currentyear");

const today = new Date();

year.textContent = today.getFullYear();

document.getElementById("lastModified").innerHTML = "Date Modified:" + document.lastModified;

const navigation = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hambutton.classList.toggle("show");

});