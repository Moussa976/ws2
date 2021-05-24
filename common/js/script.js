// Basket
function add_to_basket(rid){
    $.ajax
        ({ 
            url: 'add_to_basket.php',
            data: "rid="+rid+"&act=add",
            type: 'post',
            success: function(result)
            {
                $('#b_'+rid+'_add').hide();
                $('#b_'+rid+'_rem').show();
                messageAlert("success", "This product has been added to your cart")
            }
        });
}
function rem_from_basket(rid){
    $.ajax
        ({
            url: 'add_to_basket.php',
            data: "rid="+rid+"&act=rem",
            type: 'post',
            success: function(result)
            {
                $('#b_'+rid+'_rem').hide();
                $('#b_'+rid+'_add').show();
                messageAlert("success", "This product has been removed from your cart")
            }
        });
}
function clear_elt(element_id){
    $('#'+element_id).val('');
}
$( function() {
    $( ".dp" ).datepicker({
        dateFormat: "dd/mm/yy",
    });
} );

function myFunction(x) {
    if (x.matches) { // If media query matches
        $("#block_filter").removeClass("position-fixed")
        if($("#form_filter1").html() != "") {
            $("#form_filter2").html($("#form_filter1").html())
            $("#form_filter1").html("")
        }
    } else {
        if(!$("#block_filter").hasClass("position-fixed")) {
            $("#block_filter").addClass("position-fixed")
        }
        if($("#form_filter2").html() != "") {
            $("#form_filter1").html($("#form_filter2").html())
            $("#form_filter2").html("")
            $("#modalFilter").modal('hide')
        }
    }
}



//  Lire une vidéo
function lireAudio(record_id) {
    $('.audiosRecord').each(function(){
        $(this)[0].pause()
    })
    if(!$('#audioDropdown'+record_id).hasClass('active')){
        !$('#audioDropdown'+record_id).addClass('active')
    }
    $('#audio'+record_id)[0].play()
}
// SweetAlertMessage
function messageAlert(typealerte, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: typealerte,
        title: message
    })
}
function adds(){
    console.log('dd')
    $('#edit_form').submit()
}

//Get the button
var mybutton = $("#btnScrollTop");
// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        if (!mybutton.hasClass('d-block')) {
            if (mybutton.hasClass('d-none')) {mybutton.removeClass('d-none') }
            mybutton.addClass('d-block')
        }
    } else {
        if (!mybutton.hasClass('d-none')) {
            if (mybutton.hasClass('d-block')) { mybutton.removeClass('d-block') }
            mybutton.addClass('d-none')
        }
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}