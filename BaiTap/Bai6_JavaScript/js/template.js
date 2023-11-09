/*  selector thông qua id */
var obj = document.getElementById('title')
console.log(obj)

/*  selector thông qua tên tag -> trả về 1 mảng đối tượng*/
var objs = document.getElementsByTagName('button')
console.log(objs)

/*  selector thông qua tên class -> trả về 1 mảng đối tượng */
var objs2 = document.getElementsByClassName('btn')

/*  selector thông qua selector css 
    1.  selector trả về 1 đối tượng
    2.  selector trả về 1 mảng đối tượng
*/

var objs2 = document.querySelector('button[type="button"]')
console.log(objs2)

var objs3 = document.querySelectorAll('#title')
console.log(objs3)

// Lấy nội dung bên trong thẻ HTML
var title = obj.innerHTML
console.log(title)
// thay đổi nội dung hoặc thêm mới nội dung HTML
obj.innerHTML = "Nội dung mới của thẻ html"


// Lấy thẻ html + nội dung bên trong
var outer = obj.outerHTML
console.log(outer)

// thay thế nội dung cả thẻ html
obj.outerHTML= '<h2 id="title">Thay thế thẻ html h1 -> h2</h2>'

// JS bắt được các sự kiện 
/*
    1. click
    2. Math.pow(click, 2)
    3. keyup
    4. keydown
    5. keypress
    6. mouseover = hover css
    7. mouseout
    8. onchange (select, redio, checkbox, input)
*/

var bgRed = function() {
    var obj = document.querySelector('body')

    // background-color  -> backgroundColor
    // Các thuộc tính css có từ 2 từ trở lên nối với nhau bởi dấu gạch nối 
    // -> bỏ dấu gạch nối đi và chữ cái sau dấu gạch nối viết hoa
    obj.style.backgroundColor = "red"

}


var changeColorBg = function(color) {
    var obj = document.querySelector('body');
    obj.style.backgroundColor = color
}

// set hoặc get giá trị cho thuộc tính thẻ html
var jobRed = document.querySelector('.btn_red')
// get giá trị của thuộc tính
var color = jobRed.getAttribute('data-color')
console.log('thuộc tính color:'+color)
// set giá trị cho thuộc tính
jobRed.setAttribute('data-color' , 'green' )
jobRed.setAttribute('type', 'submit')
