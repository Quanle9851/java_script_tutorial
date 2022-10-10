// setInterval(function() {
//     console.log('1')
// }, 5000)

// setTimeout(function() {
//     alert('set timout')
// }, 5000)

// var c = 5
// c +=2
// var d = c
// console.log(d,'haha {} ', c)

// var myFunction = function(){
//     console.log('this is my function!')
// }

// myFunction()

// var myObject = {
//     myName : 'hans_lee',
//     age : 18,
//     address : '111 A dinh phong phu',

//     displayInfo : function(){
//         this.address
//     }
// }


// console.log(myObject.displayInfo)

// var array = ['java','javascrip','C#','php']
// console.log('Array: ',array)

// var a = '2    '
// var b = 2

// console.log(a==b)


// function showDialog() {
//     alert('Hi Xin Chao cac bn')
// }

// showDialog();
 

// function writeLog(){
//     console.log(arguments)
// }

// function writeLog2(){
//     for(var param of arguments){
//         console.log(param)
//     }
// }

// writeLog2(12,'quan',18,85,true)



// function displayInfo(a,b){
//     console.log(a,b);
// }

// displayInfo('haha', 555)

// var isConform = confirm("Are you OK!")
// console.log(isConform)


// function sum(a,b){
//     return a + b
// }

// console.log(sum(15,23)) 

/*
1. declaration function

function showMessage(){
    console.log("hello")
}

2. expression funtion

    var show = function(){
        console.log("message")
    }

3. arrow function

 hosting có thể gọi hàm declaration trước khi khai báo hàm,
 hàm expression thì ko dc 
*/


/* 

CHUỖI TRONG JAVASCRIP
1. Tạo Chuỗi
 - var mess = 'hello' nen dung
 - var mess = new String('fullName') kieu tra vef object
2. Một Số Trường Hợp Sử Dụng backslash (\)

var fullName = 'hello tôi là \'Quân\''
console.log(fullName)

3.Xem Độ Dài Chuỗi .length có tính dấu cách 

5.Template String ES6

var firstName = 'Quan'
var lastName = 'Le'
console.log(` My name is ${firstName} ${lastName}`)

*/



// LÀM VIỆC VỚI CHUỖI TRONG JAVASCRIPT

var myName = '  my name is Quan, Le Minh Quan , he is Quan'

// 1. Length: độ dài chuỗi có tính khoảng trắng  

// console.log(myName.length);

// 2. Find index : tìm vị trí trong chuỗi

// console.log(myName.indexOf('Quan'))
// console.log(myName.indexOf('Quan',12))
// console.log(myName.lastIndexOf('Quan'))
// console.log(myName.search('Quan'))

// 3. Cut String : cắt chuỗi theo vị trí đầu cuối 

// console.log(myName.slice(17,30))
// console.log(myName.slice(17))
// console.log(myName.slice(-5,-1))

// 4. Replace : thay thế trong chuỗi

// console.log(myName.replace('Quan','Hung'))
// console.log(myName.replace(/Quan/g,'Hung'))


// 5. Convert to upper case 

// console.log(myName.toUpperCase())

// 6. Convert to lower case

// console.log(myName.toLowerCase())

// 7. Trim : cắt khoảng trắng thừa ở đầu cuối 

// console.log(myName.trim())

// 8. Split: chuyển từ chuỗi sang array

// var programLanguage  = 'JavaScript, Ruby, PHP, Java';
// console.log(programLanguage.split(', '))
// console.log(programLanguage.split('')) // cắt từng chữ cái thành từng phần tử trong mảng 

// 9. Get a character by index: lấy ký tự theo vị trí 

// const myString2 = 'Son Dang'
// console.log(myString2.charAt(0))

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {
//     var result = str.split(', ')
//     return result
// }

// // Expected results
// console.log(strToArray(coursesStr)) 



/*  khai báo kiểu số e 

    var nimion = 1e6;
    vả billion = 1e9;

*/ 

console.log(Number.isInteger(10 / 5))














