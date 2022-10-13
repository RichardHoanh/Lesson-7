function ChangeMoney() {
    let Amount = +document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;
    if (From == "USD" && To == "VND") {
        Result = (Amount*23000) + "Đ";
    } else if (From == "VND" && To == "USD") {
        Result = (Amount/23000) + "$";
    } else if (From == "VND") {
        Result = Amount + "Đ";
    } else {
        Result = Amount + "$";
    }
    document.getElementById("Result").innerHTML= "Kết quả là : " + Result
}