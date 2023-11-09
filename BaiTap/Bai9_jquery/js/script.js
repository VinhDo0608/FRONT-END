/*Các selector $(css selector) */
$('#total_price');
$('.title');
$('.total_price span');

/*các hàm thay đổi hoặc thêm mới hoặc get nội dung cho tag html */
// 1. get nội dung: $(selector).text()
var title = $('.title').text();
// 2. thay đổi hoặc thêm mới
$('.title').text('Giỏ hàng');
// 3. get nội dung bao gồm cả html con $(selector).html()
var total_price_html = $('.total_price').html();
// 4. thay đổi hoặc thêm mới bao gồm cả html
$('.total_price').html('<span>Tổng tiền sản phẩm: </span><span id="total_price">300.000đ</span>')

/*set giá trị thuộc tính và get giá trị thuộc tính */
// 1. get giá trị của thuộc tính
var url_image = $('img').attr('src');
// 2. set giá trị cho thuộc tính
$('img').attr('src', '../image/2.jpg');

/*set và get css */
//1. get giá trị css
var fontSize = $('title').css('font-size');
//2. set giá trị cho html
$('title').css('font-size', '26px');

/*cú pháp thực hiện các sự kiện trong jquery 
$(selector).on(event, function(){
    code thực hiện khi có sự kiện
});
*/

$('.btn-cong, .btn-tru').on('click', function(){
    /*đối tượng html đang tác động*/
    var type = $(this).attr('data-type');
    /*parent() selector ra đối tượng html cha gần nhất*/
    var parent = $(this).parent();
    /*find(selector) tìm đối tượng html*/
    var input_slg = parent.find('.input_slg');
    /*get value input trong jquery */
    var slg = input_slg.val();
    if(type == "cong"){
        slg = parseInt(slg) + 1;
    } else {
        if (slg > 1){
            slg = parseInt(slg) -1; 
        }
    }

    // set lại giá trị cho input
    input_slg.val(slg);

    var price = input_slg.attr('data-price');
    var total_1_sp = slg * price;

    // selector ra đối tượng cha bất kì
    var parents = $(this).parents('.action');
    parents.find('.total_1_sp').text(formatPrice(total_1_sp)+'đ');
    var total = totalPrice();
    $('#total_price').text(formatPrice(total)+'đ');
});

$('.btn-xoa').on('click', function(){
    $(this).parents('.row').remove();
    var total = totalPrice();
    $('#total_price').text(formatPrice(total)+'đ');
});

function formatPrice(total){
    return total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
 }

 function totalPrice(){
    var total = 0;
    // duyệt đối tượng html đang được select
    $('.slg_sp').each(function(){
         var slg = $(this).find('.input_slg').val()
        var price = $(this).find('.input_slg').attr('data-price');
        total += Number.parseInt(slg * price)
    });
    return total;
 }


 // hàm append và prepend để add thêm con về trong 1 html cha