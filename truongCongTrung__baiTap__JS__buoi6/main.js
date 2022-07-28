// Bài 1: Tìm số nguyên dương nhỏ nhất 
document.getElementById('xemKQB1').onclick = function() {
  //đầu vào
  let n = 0;
  let sum = 0;
  //xử lý
  while(sum < 10000){
    n++;
    sum += n ;
  }
  //đầu ra
  let ketQuaB1 = "";
  ketQuaB1 += "<br>";
  ketQuaB1 +="<div class='text-center bg-primary text-white'>"
  ketQuaB1 +="<p>Tổng: "+ sum +"</p>"
  ketQuaB1 +="<p>Số nguyên dương nhỏ nhất: "+ n +"</p>"
  ketQuaB1 += "</div>"
  document.getElementById('ketQuaB1').innerHTML= ketQuaB1;
}

// Bài 2: Tính tổng 

document.getElementById('xemKQB2'). onclick= function () {
  // Đầu vào: 
  let x = +document.getElementById('x').value;
  let n = +document.getElementById('n').value;
  
  // xử lý:
  let total =0;
  for(let i =1; i<= n ; i++) {
    total += x ** i ;
  }
  let ketQuaB2 = "";
  ketQuaB2 += "<br>";
  ketQuaB2 +="<div class='text-center bg-primary text-white'>"
  ketQuaB2 +="<p>Tổng: "+ total +"</p>"
  ketQuaB2 += "</div>"
  document.getElementById('ketQuaB2').innerHTML= ketQuaB2;
}

// Bài 3: Tính Giai Thừa
document.getElementById('xemKQB3').onclick = function(){
  //Đầu vào
  let soN = +document.getElementById('soN').value;

  //xử lý
  let total = 1;
  if(soN>1){
    for(let i=1;i<=soN;i++){
      total = total *i;
    }
  }else{
    alert("số không hợp lệ");
  }
  let ketQuaB3 = "";
  ketQuaB3 = "<br>"
  ketQuaB3 += "<div class='text-center bg-primary '>";
  ketQuaB3 += "<p>Giai thừa của " + soN + " = "+ total + "</p>";
  ketQuaB3 +="</div>"
  document.getElementById('ketQuaB3').innerHTML=ketQuaB3;
}

//Bài 4: Tạo thẻ div
document.getElementById('xemKQB4').onclick = function() {
  // đầu vào: 
  let htmlContent = document.getElementById('htmlContent');
  //xử lý
    for(let i=1; i<=10;i++)
    {
      if(i%2===0){
      let divRed =  document.createElement('div'); 
      divRed.style.backgroundColor = "red";
      divRed.style.padding = "20px";
      //đầu ra
      htmlContent.appendChild(divRed);
      }else{
        let divBlue =  document.createElement('div'); 
        divBlue.style.backgroundColor = "blue";
        divBlue.style.padding = "20px";   
        //đầu ra
        htmlContent.appendChild(divBlue);
    }
    
  }
     
      
}
