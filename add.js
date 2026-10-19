//   let parol = prompt("Parol Kiriting")

//   if(parol==123){
//     document.write("Xush kelibsiz !")
//   }
//   else{
//     document.write("Xato , Tur yoqol")
//   }


// let ism = prompt("Isming nima ?")

// if(ism ){
//     document.write("Xush Kelibsiz")
// }




let son1 = +prompt("Birinchi sonni kiriting!");
let son2 = +prompt("Ikkinchi sonni kiriting!");
let belgi = prompt("Nima qilay? (+, -, *, /,%)");

if (belgi == "+") {
    document.write(son1 + son2);
}
else if (belgi == "-") {
    document.write(son1 - son2);
}
else if (belgi == "*") {
    document.write(son1 * son2);
}
else if (belgi == "/") {
    document.write(son1 / son2);
}
else if (belgi == "%") {
    document.write(son1 % son2);
}
else {
    document.write("Noto'g'ri amal kiritdingiz!");
}




