// 変数numに1以上の正の数を代入する
const num = 15 ;

// 変数numの値によって、処理を分ける
if (num % 3 == 0 && num % 5 == 0) {
    console.log("3と5の倍数です");
}
else if (num % 3 == 0) {
    console.log("3の倍数です"); 
}
else if (num % 5 == 0) {
    console.log("5の倍数です");
}
else {
    console.log(num)
}