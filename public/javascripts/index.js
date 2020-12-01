function checkNum(numId) {
    let numValue = document.getElementById(numId).value
    let name = ""
    //parseFloat(str.replace(',','.').replace(' ',''))
    if (isNaN(parseFloat(numValue))) {
        if (numId === "so1") {
            name = "thứ nhất"
        }
        else if (numId === "so2") {
            name = "thứ hai"
        }
        document.getElementById("thongbao").style.color = "red"
        document.getElementById("thongbao").innerText = "Giá trị nhập ở ô " + name + " không phải là số"
        return false
    }
    else {
        document.getElementById("thongbao").innerText = ""
        return true
    }
}

function Calculate(num1, num2){

        let num1Value = parseFloat(document.getElementById(num1).value)
        let num2Value = parseFloat(document.getElementById(num2).value)

        let calc = document.querySelector('input[name="pheptinh"]:checked')

        let result = ""

        document.getElementById("ketqua").value = ""
        if (calc === null){
            document.getElementById("thongbao").style.color = "red"
            document.getElementById("thongbao").innerText = "Chưa chọn phép tính"
            return
        }
        if (checkNum(num1) === false || checkNum(num2) === false){
            document.getElementById("ketqua").value = result
            return
        }

        let calcValue = calc.value // because calc.value cannot check null

        if (calcValue === "add"){
            result = num1Value + num2Value
        }
        else if (calcValue === "sub"){
            result = num1Value - num2Value
        }
        else if (calcValue === "mul"){
            result = num1Value*num2Value
        }
        else{
            if (num2Value !== 0) {
                result = num1Value/num2Value
            }
            else {
                document.getElementById("thongbao").style.color = "red";
                document.getElementById("thongbao").textContent = "Không chia được cho 0";
            }
        }
        document.getElementById("ketqua").value = result
}