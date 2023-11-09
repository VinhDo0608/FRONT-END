// Các hàm output trong js
// document.write('<h1>Cach 2 su dung file .js va su dung the script de khai bao file</h1>');
// alert('Website xay ra su co!');
// console.log('Chu yeu dung de debug code');
// var ok = confirm('Ban co muon xoa san pham khoi gio hang khong ?');
// if(ok) {
//     alert("Dong y xoa");
// } else {
//     alert("Khong dong y xoa")
// }


/*  Định nghĩa biến trong js
    var ten_bien;


    Quy tac dat ten bien:
    1.  Ten bien bat dau bang chu cai hoac $ hoac _
    2.  Ten bien phai la duy nhat trong vung hoat dong
    3.  Ten bien phan biet chu hoa chu thuong



 */
var number_a;
var number_A = 10;
var notify = 'Các bạn hôm nay được nghỉ';
var array = ['Nguyen Van A', 'Nguyen Van B', 1, 2, 5, true];

/*
    Kiểu dữ liệu của biến
    1.  Kiểu số
    2.  Kiểu chuỗi
    3.  Kiểu boolean:   true - false
    4.  Kiểu mảng


    - Xac dinh kieu du lieu cua 1 bien trong js duoc xac dinh 
    khi bien duoc gan gia tri và kiểu dữ liệu của biến sẽ là kiểu dữ liệu của giá trị
*/


var bool = true;


/*
    Các phép toán học
*/

//  1.  Phép gán (=)
var a = 5;
var b = 10;

//  2. Phép cộng toán học (2 số hạng đều phải có kiểu dữ liệu dạng số)
var tong = a + b;
// alert(tong);

/*
    khi 1 trong 2 hoặc cả 2 số hạng có kiểu dữ liệu là chuỗi thì phép tính
    là phép cộng chuỗi
*/

var msg = "Tong = " + tong
// alert(msg); 

//  3.  Phép trừ (-)
var hieu = b - a;

//  4.  Phếp nhân (*)
var tich = a * b;

//  5.  Phép chia hết (/)
var chia_het = b / a;

//  6.  Phép chia lấy dư (%)
var c = 3;
var du = a % c;

//  7.  Cộng thêm 1 đơn vị
c++;
b--;

//  8.  Phép tính kết hợp với phép gán
c = c + 4;
c+=4;

b = b - 2;
b-=2;

var tong_2 = 5 + "10" + 20; // 51020
var tong_3 = "10" + 4 * 5;

/*
    Quy tắc toán học
        1.  trong ngoặc trước ngoài ngoặc sau
        2.  nhân chia trước cộng trừ sau
        3.  thực hiện từ trái qua phải
*/

/*
    Các phếp so sánh 
    - trả dữ liệu về dạng boolean true / false
    - chỉ so sánh về mặt giá trị ko so sánh về kiểu dữ liệu
*/  
var bool_1 = 3 > '4'; // false


/*
    Phép so sánh bằng
    1.  Phép so sánh tương đối ==   so sánh về mặt giá trị ko so sánh về kiểu dữ liệu
    2.  Phép so sánh tuyệt đối ===  so sánh cả giá trị và kiểu dữ liệu
*/

var bool_2 =  false == 0;
var bool_3 = false == null;
var bool_4 = null === 0;


/*
    Phép so sánh khác
    1.  Phép so sánh tương đối !=   so sánh về mặt giá trị ko so sánh về kiểu dữ liệu
    2.  Phép so sánh tuyệt đối !==  so sánh cả giá trị và kiểu dữ liệu
*/

var bool_6 = 6 != '6';

/*
    Các phép kết hợp điều kiện
    1.   Phép kết hợp và
    -   đúng (true) khi tất cả các điều kiện kết hợp đúng
    -   sai (false) khi 1 trong các điều hiện hoặc tất cả các điều kiện kết hợp sai

*/

var d= 10;
var ket_hop_va = (d % 2 == 0) && (d > 5) && ( d % 4 == 2);

/*
    2.  Phép hợp điều kiện hoặc
    -   đúng (true) khi 1 trong các điều hiện hoặc tất cả các điều kiện kết hợp đúng
    -   sai (false) khi tất cả các điều kiện kết hợp sai
*/

var ket_hop_hoac = (d % 2 == 0) || (d > 15) || ( d % 4 == 2);
/*
    Câu lệnh điều kiện if else
*/

// var  e = 20;

// if(e % 3 == 0)
//     alert('So e chia het cho 3')
// else if(e % 5 == 0) {
//     if(e % 2 == 0)
//         alert('So e chia het cho 2 va 5');
//     else
//         alert('So e chia het cho 5');
// } else 
//     alert('So e chia het cho 3')


/*
    Câu lệnh vòng lặp
    1.  vòng lặp for(câu lệnh; điều kiện; câu lệnh) {}
*/

for(var i = 1; i <= 20; i++) {
    if(i % 3 == 0)
        console.log("i  = " + i);
}

console.log(array.length)
for(var i = 0 ; i < array.length; i++)
    console.log("Phần tử thứ " + i + " = " + array[i])

/*
    2.  Vòng lặp while(điều kiện)
*/

var m = 0;
var tong_sochan = 0;
while(m < 10) {
    // if(m % 2 == 0)
    //     tong_sochan += m;
    if(m > 5)
        break;
    // console.log(m)
    m++;
}


/*
    3.  Vòng lặp do {
        công việc vần làm
    }while(diều kiện)
*/

var n = 0
var tong_sole = 0
do {
    if(n % 2 != 0) {
        if(n % 3 == 0) {
            n++;
            continue;
        }
        // tong_sole+=n
        console.log(n)
    }
    n++
} while (n < 10);


/*
    Các câu lệnh can thiệp vòng lặp
    1.  break   -> dừng vòng lặp khi thỏa mãn điều kiện
    2.  continue -> bỏ qua 1 vòng lặp thỏa mãn điều kiện
*/

/*
    Dạng mảng 1 chiều và tuần tự
    -   thứ tự các phần tử trong mảng bắt đầu từ 0 đến n phần tử
*/

var array_1 = ["Do Tu", "Vinh", 12, 43, true]


// Đếm phần tử trong mảng


var count_array1 = array_1.length

// Lấy giá trị 1 phần tử trong mảng
var val = array_1[1];
// alert("Giá trị phần tủ thứ 1: " + val)

// Thay đổi giá trị của 1 phần tử
array_1[1] = "Nguyen Van A"

//  Thêm phần tử mới vào mảng
// array_1[5] = "Fontend 36"
array_1.push("Nguyen Van A")
console.log(array_1)

/* Xóa 1 phần tử trong mảng
    splice(vị trí xóa, số phần tử xóa)
*/
array_1.splice(2, 1)

/*
    Mảng 1 chiều và bất tuần tự
    thứ tự phần tử trong mảng không tuân theo quy luật 0 -> mà sẽ tuân theo key bất kì
*/
var array_2 = new Array()
array_2['name'] = 'Duc'
array_2['age'] = '19'
array_2['address'] = 'Ha Noi'

console.log(array_2)

/*  Hàm và tham số */

// Hàm không có tham số và có giá trị trả về
var tinhTong = function() {
    var a = 10
    var b = 1
    return a + b
}

console.log(tinhTong())

var snt = function(n) {
    if(n < 2)
        console.log("Đây không phải là snt")
    else {
        var dem  = 0;
        for(var i = 2; i <= Math.sqrt(n); i++) {
            if(n % i ==0)
                dem++;
        }
        if(dem == 0)
            console.log("Đây là snt")
        else 
            console.log("Đây không phải là snt")
    }
}

snt(3)

//  Hàm có tham số và có giá trị trả về
var tongTienSp = function(slg, giaTien) {
    return slg * giaTien;
}

console.log(tongTienSp(3, 300000))

// Ham khong co tham so va khong co gia tri tra ve
var doiMauBody = function() {
    var obj = document.getElementsByTagName('body')
    obj[0].style.backgroundColor = 'blue'
    console.log(obj)
}

// doiMauBody()

/*
    Nguyên tắc đặt đặt tên hàm
    1.  Bắt đầu bằng chữ , $ hoặc  _
    2.  Phân biệt chữ hoa và chữ thường
    3.  Tên hàm phải là duy nhất
*/

/*
    Các loại biến
    1.  Biến toàn cục: biến đặt ở ngoài tất cả các hàm hoặc các phương thức
    -   Tồn tại trong suốt quá trình sử dụng website
    -   Dùng tất cả mọi nơi

    2.  Biến cục bộ
    -   Biến được đặt bên trong thân hàm
    -   Tham số
    Phạm vi sử dụng bên trong thân hàm

*/

var notify2 = "Hôm nay \"Fe36\" học bình thường \r\n Hôm nay ngày 18/09/2022"
console.log(notify2)

/*
    Các hàm và phương thức xử lí chuỗi
*/

//  1.  Đếm số kí tự trong chuỗi
var count_string = notify2.length
console.log(count_string)

//  2.  Tìm kiếm chuỗi trả về vị trí đầu tiên tìm thấy
//  indexOf()

var viTri_1 = notify2.indexOf('Hôm nay')
console.log("Vị trí của từ 'Hôm nay': "+viTri_1)


//  3.  Tìm kiếm chuỗi trả về vị trí đầu tiên tìm thấy
//  lastiIdexOf()

var viTri_2 = notify2.indexOf('Hôm nay')
console.log("Vị trí của từ 'Hôm nay': "+viTri_2)

//  4.  slice và substring: hàm cắt chuỗi (start , end - 1)
console.log(notify2.substring(0, 7))

//  5.  substr hàm cắt chuỗi (start , length)
console.log(notify2.substr(14, 20))

//  6. Hàm replace(search, string new)
console.log(notify2.replace("Hôm nay", "Ngày mai"))

console.log(notify2.split(" "))

//  Các phương thức hỗ trợ số
/*
    1.  số  nguyên Integer  1, 2, 3, 4
    2.  số thức Float       2.5, 3.5, 4.5
*/

//  1.  toString: convert số về dạng chuỗi
var number_b = 100
var string_100 = number_b.toString()
console.log(typeof string_100)

//  2.  toFixed: làm tròn số thập phân, làm tròn n số sau số thập phân
/*  số sá số làm tròn > 5 làm tròn lên 1 đơn vị
                        < 5 giữ nguyên */
var float_1 = 2.2323123123123
console.log(float_1.toFixed(3))

/*  3.  toPrecision(n) convert về chuỗi và lấy n phần tử */

console.log(float_1.toPrecision(2))

/*  4,  convert các kiểu dữ liệu khác vè dạng số */
var convert = Number(true)
console.log(convert)

/*  5.  Hàm ép kiểu dữ liệu về dạng số nguyên */
console.log(parseInt(float_1.toPrecision(2)))

/*  Các phương thức toán học
    Math.cell   hàm làm tròn lên
    Math.floor  hàm làm tròn xuống
    Math.round  hàm làm tròn theo quy tắc toán học
*/
console.log(Math.ceil(10.01))
console.log(Math.floor(10.01))
console.log(Math.round(12.345))
console.log(Math.round(12.97))
