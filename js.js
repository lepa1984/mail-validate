////////////////validate email ////////////

const form = document.querySelector(".form");
const email = document.querySelector(".form__email");
const clear = document.querySelector(".form__clear");
let text = document.querySelector(".error-text");
function validator() {
    let emailVal = email.value;

    const re =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (emailVal.match(re)) {
        text.innerHTML = "Все впорядке";
        text.style.color = "green";
    } else {
        text.innerHTML = "Введите адрес правильно";
        text.style.color = "red";
    }
    if (emailVal == "") {
        text.innerHTML = "";
    }
    if (!emailVal == "") {
        clear.addEventListener("click", () => {
            form.reset();
            text.innerHTML = "";
        });
    }
}
email.addEventListener("keydown", validator);
