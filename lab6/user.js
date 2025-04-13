function greetUser() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let today = new Date();
    alert(`Hello ${firstName} ${lastName}. Today is ${today.toLocaleDateString()} and the current date is ${today.toDateString()}`);
}