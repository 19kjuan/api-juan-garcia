function fetchApi(url) {
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Request failed");
        }
    })
    .then(data => {
        console.log(data);
        document.querySelector("#result").innerHTML = data;
    })
    .catch(error => {
        console.error(error);
        swal("Error", error.message, "error");
    });
}

function selectOption(option) {
    const inputs = ["#num1", "#num2", "#num3"].map(id => document.querySelector(id));
    inputs.forEach(input => input.value = "");
}

function submitForm() {
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const num3 = document.querySelector("#num3").value;
    let apiUrl;

    switch (document.querySelector('input[name="choice"]:checked').value) {
        case "message":
            apiUrl = "/route3";
            break;
        case "grades":
            apiUrl = `/grades/${num1}/${num2}/${num3}`;
            break;
        case "age":
            apiUrl = `/age/${num1}`;
            break;
        case "arrays":
            apiUrl = "/route2";  // Example; you may want to change this
            break;
        default:
            apiUrl = "/";
    }

    fetchApi(apiUrl);
}
