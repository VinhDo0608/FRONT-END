var add = function () {
    var obj = document.querySelector('.quantity');
    var a = parseInt(obj.value);
    a++;
    obj.setAttribute('value', a);
}

var remove = function () {
    var obj = document.querySelector('.quantity');
    var a = parseInt(obj.value);
    if(a > 1){
        a--;
    } else {
        alert('Số lượng không thể nhỏ hơn 1')
    }
    obj.setAttribute('value', a);
}