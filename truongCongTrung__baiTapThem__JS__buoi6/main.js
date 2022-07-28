// Bài 5: Số nguyên tố
document.getElementById("xemKQB5").onclick = function () {
  //đầu vào
  let n = +document.getElementById("n").value;

  //xử lý
  let result = "";
  for (let i = 2; i <= n; i++) {
    let isSoNT = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isSoNT = false;
        break;
      }
    }
    if (isSoNT == true) {
      result += i + ", ";
    }
  }
  document.getElementById("ketQuaB5").innerHTML =
    "Các số nguyên tố từ 1 đến " + n + " là : " + result;
};
