console.log(" hello Cybersoft")

function themnguoidung(){
  console.log(" tanloc themnguoidung")
}


// In ra ngoài màn hình 
console.log("Hello FE56")

// BIẾN
//String
var username = "Vu Mai Thy";
var address = "112 Cao Thắng";
//Number
var age = 18;
//Boolean
var status = true;
//Null
var numberStudent = null;
//undefined
var people;

console.log("tên: " + username);
console.log("địa chỉ: " + address);
console.log(username, address);
console.log("tên: " + username, " địa chỉ: " + address);
console.log(people);

//Hoisting
console.log("Full name: " + fullName);
var fullName = "Nguyen Van A";

// isLogin = true;
// console.log("Login:", islogin);

// console.log(student);

//Constarnt Hằng số
const PI = 3.14;


//CÂU LỆNH ĐK
// == so sánh giá trị
// === so sánh luôn kiểu dữ liệu
if (1 === "1") {
  console.log("ĐK đúng");
} else {
  console.log("ĐK sai")
}

//Toán tử 3 ngôi
// Dk ? "Dung" : "Sai"
(1 == 1) ? console.log("ĐK Đúng") : console.log("ĐK Sai")

//
var btA = true;
var btB = false;
console.log("Ket qua &&: ", btA && btB);
console.log("Ket qua ||: ", btA || btB);
console.log("Phu dinh cua btA: ", !btA);

//switch case
switch (0) {
  case 0:
    console.log("Day la so 0");
    break;
  case 1:
    console.log("Day la so 1");
    break;
  case 2:
    console.log("Day la so 2");
    break;
  default:
    console.log("Không xác định");
    break;
}

// Array
var list = ["Thy", "Mai", "Phuc", "Nam"];
console.log(list);
console.log(list[0]);

//Loop
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// bài toán
var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;
var number_5 = 20;
var number_6 = 7;

var total = number_1 + number_2;
console.log("Tổng là", total);

var total2 = number_3 + number_4;
console.log("Tổng 2 là ", total2)

//HÀM KO THAM SỐ
tinhTong12();
tinhTong34();

function tinhTong12() {
  var sum = number_1 + number_2;
  console.log("sum la: ", sum);
}

function tinhTong34() {
  var sum = number_3 + number_4;
  console.log("sum la: ", sum);
}

//HÀM CÓ THAM SỐ
function tinhTong(numberA, numberB) {
  var sum = numberA + numberB;
  console.log("sum là: ", sum);
}
tinhTong(number_1, number_2);
tinhTong(number_3, number_4);
tinhTong(number_5, number_6);
tinhTong(100, 29);

//HÀM CÓ GIÁ TRỊ TRẢ VỂ
function tinhTong2(numberA, numberB) {
  var sum = numberA + numberB;
  return sum;
}
// var total3 = tinhTong2(50, 100);
console.log("Tổng là", tinhTong2(50, 100));

//BT tính điểm TB: toán, lý, hóa
var toan = 7;
var ly = 8;
var hoa = 9;

function tinhDiemTB(toan, ly, hoa) {
  var diemTB = (toan + ly + hoa) / 3;
  return diemTB;
}

function xepLoai(diemTB) {
  console.log(diemTB);

  if (9 <= diemTB && diemTB <= 10) {
    console.log("Xếp loại xuất sắc");
  } else if (8 <= diemTB && diemTB < 9) {
    console.log("Xếp loại giỏi");
  } else if (7 <= diemTB && diemTB < 8) {
    console.log("Xếp loại khá")
  } else if (5 <= diemTB && diemTB < 7) {
    console.log("Xep loại TB")
  } else {
    console.log("Xếp loại yếu");
  }
}

// var diemTB = tinhDiemTB(toan, ly, hoa);
xepLoai(tinhDiemTB(toan, ly, hoa));

//  Dom 

var txtIput = document.getElementById('txtInput').value;
console.log(txtIput);

var layten = document.getElementById('ten').innerHTML;
console.log(layten);

// cach1
// function evenclick(){
//   console.log("clickchuot");
//   var txtvalue = document.getElementById("txtInput").value;
//   console.log(txtvalue);
// }

// // cach 2
// document.getElementById('btnClick').onclick = function () {
//   var txtvalue = document.getElementById('txtInput').value;
//   console.log(txtvalue);
// }

// cach 3 

// document.getElementById('btnClick').addEventListener("click",function(){
//   var txtvalue = document.getElementById('txtInput').value;
//   console.log(txtvalue);
// })


function demoClick() {
  var txtvalue = document.getElementById('txtInput').value;
  console.log(txtvalue);
}
document.getElementById('btnClick').addEventListener('click', demoClick);


document.getElementById('btnnhanemdi').addEventListener('click', function () {
  document.getElementById('divthaydoi').innerHTML = "da luu roi";
  document.getElementById("divthaydoi").style.backgroundColor = "red";
  document.getElementById("divthaydoi").style.fontSize = "40px";
});

document.getElementById('btnhide').addEventListener('click', function () {
  document.getElementById('divthaydoi').style.display = "none";
});

document.getElementById('btnshow').addEventListener('click', function () {
  document.getElementById('btnnhanemdi').disabled = false;
  document.getElementById('divthaydoi').style.display = 'block';
  document.getElementById('divthaydoi').style.opacity = "1";
});

document.getElementById('btnlammo').addEventListener('click', function () {
  document.getElementById('divthaydoi').style.opacity = "0.5";
});

document.getElementById('btndisable').addEventListener('click', function () {
  document.getElementById('btnnhanemdi').disabled = true;
});


// On/Off buld

document.getElementById('btnOn').addEventListener('click', function () {
  document.getElementById('imgBuld').src = "./img/pic_bulbon.gif";
});

document.getElementById('btnOff').addEventListener('click', function () {
  document.getElementById('imgBuld').src = "./img/pic_bulboff.gif";
});

// dang nhap cybersoft


document.getElementById('btnlogin').addEventListener('click', function () {

  var txtUsername = document.getElementById('txtUsername').value;

  var txtPassword = document.getElementById('txtPassword').value;

  kiemtra(txtUsername, txtPassword);
});

function kiemtra(txtUsername, txtPassword) {
  if (txtUsername === 'Cybersoft' && txtPassword === 'Cybersoft') {
    console.log("Login Success !!!");
    document.getElementById('txtthongbao').innerHTML = 'login thanh cong';
    changeColor2("login thanh cong","alert alert-success")
  } else {
    console.log("Login Failed !!!");
    document.getElementById('txtthongbao').innerHTML = 'login that bai';
    changeColor2("login that bai 2 ","alert alert-danger")
  }
};

function changeColor(mess , bg){
document.getElementById("txtthongbao").innerHTML=mess;
document.getElementById('txtthongbao').style.display='block';
document.getElementById('txtthongbao').style.background=bg ;

}

function changeColor2(mess, classes){
  document.getElementById('txtthongbao').style.display='block';
  document.getElementById("txtthongbao").innerHTML=mess;
  document.getElementById('txtthongbao').className= classes;
}


/*
* Dom Tag Name
*/
var tagname= document.getElementsByTagName("button")[1];
console.log(tagname);


/**
 * Dom class Name
 */

var _className=document.getElementsByClassName("btn")[0];
console.log(_className);

/*
Dom query selector
*/

var _queryselector = document.querySelector(".container #txtthongbao")
console.log(_queryselector)





/**
 * Dom queryselectorall
 * 
 */

 var _queryselectorall= document.querySelectorAll(".container .form-group")[0];
 console.log(_queryselectorall)


 /**
  * bai tap tinh tien bo
  * / */

 document.getElementById('btnTinhTienTip').addEventListener('click',function(){
  var txttongTien = document.getElementById('txtTongTien').value;
  var txtPhanTramTiep = document.getElementById('slPhanTramTip').value;
  var txtSoNguoi = document.getElementById('txtSoNguoi').value;
  console.log(txttongTien,txtPhanTramTiep,txtSoNguoi)

  /*
  CT: txtTongTien * txtPhanTramTip /100/txt Nguoi
  */

  var total =(txttongTien*txtPhanTramTiep)/100/txtSoNguoi;

  document.getElementById('txtThongBaoTienTip').innerHTML=total +" $ moi nguoi";
  document.getElementById('txtThongBaoTienTip').className="alert alert-success d-block"

 });