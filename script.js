let body = document.body;
body.style.margin = "0";
body.style.padding = "0";
body.style.boxSizing = "border-box";
body.style.fontFamily = "Inter, sans-serif";
body.style.backgroundColor = "#F5F5F5";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

let header = document.createElement("header");
header.style.width = "1440px";
header.style.height = "140px";
header.style.border = "2px solid rgb(211, 209, 209)";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";

let nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = 'center'
nav.style.width = "80%";

let logo = document.createElement("img");
logo.src = "./image 2.png";
logo.alt = "logo";

let ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";

let li = document.createElement("li");

let btnLang = document.createElement("button");
btnLang.style.backgroundColor = "rgb(244, 244, 244)";
btnLang.style.border = "none";
btnLang.style.display = "flex";
btnLang.style.alignItems = "center";
btnLang.style.width = "100px";
btnLang.style.height = "50px";
btnLang.style.justifyContent = "center";
btnLang.textContent = "O'zb";

let langIcon = document.createElement("img");
langIcon.src = "./Vector.png";
langIcon.alt = "lang";

btnLang.prepend(langIcon);
li.appendChild(btnLang);
ul.appendChild(li);
nav.appendChild(logo);
nav.appendChild(ul);
header.appendChild(nav);
body.appendChild(header);

let section = document.createElement("section");
section.style.width = "650px";
section.style.height = "700px";
section.style.border = "2px solid rgb(211, 209, 209)";
section.style.borderRadius = "30px";
section.style.backgroundColor = "white";
section.style.padding = "20px";
section.style.marginTop = "20px";

let div2 = document.createElement('div');
div2.style.display = 'flex'
div2.style.alignItems = 'center'
div2.style.justifyContent = 'space-evenly'

let img1 = document.createElement("img");
img1.src = "./image 3.png";
img1.alt = "img1";
div2.appendChild(img1)

let p5 = document.createElement("p");
p5.style.color = "#F0400F";
p5.style.fontWeight = "700";
p5.style.fontSize = "24px";
p5.textContent = "Offerta imzolash ";
div2.appendChild(p5)

let icon = document.createElement("img");
icon.src = "./Vector (1).png";
icon.alt = "icon";
p5.appendChild(icon);

let p4 = document.createElement("p");
p4.style.fontSize = "48px";
p4.style.fontWeight = "700";
p4.style.color = "#0E0D5D";
p4.textContent = "Spacega xush kelibsiz";
p4.style.textAlign = "center";

let d2 = document.createElement("div");
d2.style.width = "533px";
d2.style.height = "70px";
d2.style.borderRadius = "20px";
d2.style.display = "flex";
d2.style.alignItems = "center";
d2.style.gap = "40px";
d2.style.fontSize = "28px";
d2.style.fontWeight = "500";
d2.style.backgroundColor = "#F5F5F5";
d2.style.margin = '0 auto'

let p3 = document.createElement("p");
p3.style.backgroundColor = "white";
p3.style.width = "255px";
p3.style.height = "54px";
p3.style.borderRadius = "15px";
p3.style.textAlign = "center";
p3.style.lineHeight = "54px";
p3.style.margin = '0 30px'
p3.textContent = "O’quvchiman";

let p2 = document.createElement("p");
p2.style.color = "#757575";
p2.style.width = "255px";
p2.textContent = "Ota-onaman";
d2.appendChild(p3);
d2.appendChild(p2);

let input = document.createElement("input");
input.style.width = "533px";
input.style.height = "70px";
input.style.borderRadius = "20px";
input.style.padding = "0 30px";
input.style.border = "1px solid gray";
input.style.fontSize = "24px";
input.style.margin = '30px 30px'
input.placeholder = "Modme Id or Phone number";

let passwordWrapper = document.createElement("div");
passwordWrapper.style.position = "relative";
passwordWrapper.style.width = "533px";

let passwordInput = document.createElement("input");
passwordInput.style.width = "100%";
passwordInput.style.height = "70px";
passwordInput.style.borderRadius = "20px";
passwordInput.style.padding = "0 30px";
passwordInput.style.border = "1px solid gray";
passwordInput.style.fontSize = "24px";
passwordInput.style.margin = '0 30px'
passwordInput.type = "text";
passwordInput.placeholder = "Password";

let togglePassword = document.createElement("span");
togglePassword.textContent = "👁";
togglePassword.style.position = "absolute";
togglePassword.style.right = "-50px";
togglePassword.style.top = "15px";
togglePassword.style.cursor = "pointer";
togglePassword.style.fontSize = "30px";

passwordWrapper.appendChild(passwordInput);
passwordWrapper.appendChild(togglePassword);

let submitButton = document.createElement("button");
submitButton.style.backgroundColor = "#F69E86";
submitButton.style.color = "white";
submitButton.style.width = "202px";
submitButton.style.height = "67px";
submitButton.style.borderRadius = "20px";
submitButton.style.fontSize = "24px";
submitButton.style.margin = '20px 423px'
submitButton.textContent = "Submit";

section.append(div2, p4, d2, input, passwordWrapper, submitButton);
body.appendChild(section);

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
    }
});

if (input.value.trim() !== '' && passwordInput.value.trim() !== '') {
    submitButton.style.backgroundColor = 'rgb(255, 72, 0)';
} else {
    submitButton.style.backgroundColor = '#F69E86';
}

function check() {
    if (input.value.trim() !== '' && passwordInput.value.trim() !== '') {
        submitButton.style.backgroundColor = 'rgb(255, 72, 0)';
    } else {
        submitButton.style.backgroundColor = '#F69E86';
    }
}

input.addEventListener('input', check);
passwordInput.addEventListener('input', check);

check();