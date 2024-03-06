const wrapper = document.querySelector(".wrapper"),
    qrinput = wrapper.querySelector(".form input"),
    generatebtn = wrapper.querySelector(".form button"),
    qrimg = wrapper.querySelector(".qr-code img");

generatebtn.addEventListener("click", () => {
    let qrvalue = qrinput.value;
    if (!qrvalue) return;
    generatebtn.innerText = "Generating QR Code ..."
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "Generate OR Code"
    })
})