let userForm = document.querySelector("#validate");
mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let gender = userForm.gender.value;
    let jina = userForm.jina.value;
    myData();
    if (gender == "male") {
        document.querySelector("#output").innerHTML = "Hi " + jina + "! Your Akan Name is " + mNames[d] + "."
        // console.log(mNames[d])
    } else {
        document.querySelector("#output").innerHTML = "Hi " + jina + "! Your Akan Name is " + fNames[d] + "."
        // console.log(fNames[d])
    }


})
myData = () => {
    let date = userForm.date.value;
    let CC = parseInt(date.substring(0, 2));
    let YY = parseInt(date.substring(2, 4));
    let MM = parseInt(date.substring(5, 7));
    let DD = parseInt(date.substring(8));
    // alert(date)
    // alert (typeof(DD))
    d = (Math.floor(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    // alert(d)
    return d;
}
