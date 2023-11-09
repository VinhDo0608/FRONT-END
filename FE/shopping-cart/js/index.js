
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
    parents.find('.total_1_sp').text('$'+formatPrice(total_1_sp));
    var total = totalPrice();
    $('#total_price').text('$'+formatPrice(total));
});

$('.btn-xoa').on('click', function(){
    $(this).parents('.row').remove();
    var total = totalPrice();
    $('#total_price').text('$'+formatPrice(total));
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
        total += Number.parseFloat(slg * price)
    });
    return total;
 }