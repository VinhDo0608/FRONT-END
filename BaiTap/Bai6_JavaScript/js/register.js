function valiDate() {
    // hàm ghi đè sự kiện mặc định thẻ html
    // e.preventDefault();

    // var obj_fullname = document.getElementById('input_fullname')

    // // Lấy giá trị của thẻ input
    // var fullname = obj_fullname.value;

    // var obj_error_fullname = document.getElementById('error_fullname')
    // if(fullname == '') {
    //     // set giá trị cho input
    //     // obj_fullname.value = 'Nguyễn Văn A'
    //     obj_error_fullname.innerHTML = "Vui lòng nhập họ tên"
    //     obj_error_fullname.style.display = 'block'
    // } else {
    //     obj_error_fullname.innerHTML = ""
    //     obj_error_fullname.style.display = 'none'
    // }

    var objs = document.getElementsByClassName('form_control');
    for(var j = 0; j < objs.length; j++){
        var obj = objs[j];
        var value_obj = obj.value;
        var attr_name = obj.getAttribute('name');
        var id_error = 'error_'+attr_name;
        var obj_error = document.getElementById(id_error);
        var field_name = obj.getAttribute('field-name')
        console.log(field_name);
        if(value_obj == ''){
            obj_error.innerHTML = 'Vui lòng nhập ' + field_name;
            obj_error.style.display = 'block';
        } else {
            obj_error.innerHTML = '';
            obj_error.style.display = none;
        }
    }

    var obj_gender = document.querySelectorAll('input[name="gender"]')
    var gender = ''
    for(var i = 0; i < obj_gender.length; i++) {
        if(obj_gender[i].checked)
            gender = obj_gender[i].value;
    }
    if(gender == '') {
        alert("Vui lòng chọn giới tính")
    }else{
        if(gender == 1){
            alert('giới tính: nam');
        } else {
            alert('giới tính: nữ');
        }
    }
}

function keyupFullname() {
    var obj = document.getElementById('input_fullname')
    var fullname = obj.value;
    var obj_error_fullname = document.getElementById('error_fullname')
    if(fullname == "") {
        obj_error_fullname.innerHTML = "Vui lòng nhập họ tên"
        obj_error_fullname.style.display = 'block'
    } else {
        obj_error_fullname.innerHTML = ""
        obj_error_fullname.style.display = 'none'
    }
}

function chooseCity(){
    var objCity = document.querySelector('select');
    // get giá trị đã chọn của select option
    var city = objCity.value();
    alert('Tỉnh/Thành phố: ' + city)
}

/*
    Cần nhớ
    1. các cách selector trong javascript
    2. get và set nội dung html (innerHTML và outerHTML)
    3. get và set thuộc tính html (getAttribute và setAttribute)
    4. get và set css (obj.style.thuộc tính css)
    5. get và set giá trị của thẻ input trong form
    6. các sự kiện (keyup, keydown, mouseup, mousedown, mouseover, click, double click)
*/

function onchangeAvatar(){
    var obj = document.getElementById('avatar');
    var obj_preview = document.getElementById('preview');
    const src = URL.createObjectURL(obj.files[0]);
    obj_preview.src = src;
}